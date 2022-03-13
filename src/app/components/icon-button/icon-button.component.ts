import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventWithContent } from 'src/app/models/event-with-content.model';
import { EventManager } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input()
  public mode: string = 'edit';

  public buttonState: boolean = false;

  public eventSubscription: Subscription[] = [];

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {
    this.initState();

    this.eventSubscription.push(this.eventManager.subscribe('gameButtonClicked', (mode: string) => {
      if (mode !== this.mode) {
        this.buttonState = false;
      }
    }));

    this.eventSubscription.push(this.eventManager.subscribe('restartGame', () => {
      this.initState();
    }));

  }

  initState() {
    this.buttonState = this.mode == 'edit';

    if (this.buttonState)
      this.eventManager.broadcast(new EventWithContent<string>('gameButtonClicked', this.mode));

  }

  handleClick() {

    if (!this.buttonState) {
      this.buttonState = true;

      this.eventManager.broadcast(new EventWithContent<string>('gameButtonClicked', this.mode));
    }
  }

}