import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileEvent } from 'src/app/events/tile.event';
import { EventManager } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public eventSubscription: Subscription[] = [];
  public buttonClicked: String = '';


  constructor(public eventManager: EventManager) { }

  ngOnInit(): void {
    this.eventSubscription.push(this.eventManager.subscribe('gameButtonClicked', (mode: string) => {
      this.buttonClicked = mode;
    }));

    this.eventSubscription.push(this.eventManager.subscribe('gridTileClicked', (position: TileEvent) => {
      this.buttonClicked = `(${position.positionX}, ${position.positionY})`;
    }));
  }

}
