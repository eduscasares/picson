import { Component, Input, OnInit } from '@angular/core';
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

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.eventManager.broadcast(new EventWithContent<string>('gameButtonClicked', this.mode));
  }
}