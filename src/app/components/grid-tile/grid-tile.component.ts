import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileEvent } from 'src/app/events/tile.event';
import { EventWithContent } from 'src/app/models/event-with-content.model';
import { EventManager } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.scss']
})
export class GridTileComponent implements OnInit {

  public state: TileState = TileState.Empty;
  public tileStates = TileState;

  private eventSubscription: Subscription[] = [];

  @Input()
  public value?: number;

  @Input()
  public x: number = 0;

  @Input()
  public y: number = 0;

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {

    this.eventSubscription.push(this.eventManager.subscribe('changeGridTileState', (tileEvent: TileEvent) => {

      if (this.x == tileEvent.positionX && this.y == tileEvent.positionY) {
        this.state = tileEvent.fromState;
      }

    }));

  }

  handleClick() {
    this.eventManager.broadcast(new EventWithContent<TileEvent>('gridTileClicked', new TileEvent(this.state, this.x, this.y)));
  }

}

export enum TileState { Empty, Filled, Cross }