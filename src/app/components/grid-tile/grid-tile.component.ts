import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  public x: number = 0;

  @Input()
  public y: number = 0;

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.eventManager.broadcast(new EventWithContent<TileEvent>('gridTileClicked', new TileEvent(this.x, this.y)));  }

}

enum TileState { Empty, Filled, Cross }