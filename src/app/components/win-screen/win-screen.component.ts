import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventManager } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-win-screen',
  templateUrl: './win-screen.component.html',
  styleUrls: ['./win-screen.component.scss']
})
export class WinScreenComponent implements OnInit {

  public eventSubscription: Subscription[] = [];

  @Input()
  public visibility: boolean = false;

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {
    this.eventSubscription.push(this.eventManager.subscribe('endGame', () => {
      this.visibility = true;
    }));
  }

}
