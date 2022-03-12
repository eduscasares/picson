import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileEvent } from 'src/app/events/tile.event';
import { EventWithContent } from 'src/app/models/event-with-content.model';
import { PuzzleModel } from 'src/app/models/puzzle.model';
import { EventManager } from 'src/app/services/event-manager.service';
import { JsonParserService } from 'src/app/services/json-parser.service';
import { TileState } from '../grid-tile/grid-tile.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public eventSubscription: Subscription[] = [];
  public selectedMode: String = '';

  public puzzleModel: PuzzleModel = this.jsonParser.getPuzzleData();

  constructor(protected eventManager: EventManager,
    protected jsonParser: JsonParserService) { }

  ngOnInit(): void {
    this.eventSubscription.push(this.eventManager.subscribe('gameButtonClicked', (mode: string) => {
      this.selectedMode = mode;
    }));

    this.eventSubscription.push(this.eventManager.subscribe('gridTileClicked', (tile: TileEvent) => {
      let event = new TileEvent(this.calculateNextState(tile.fromState), tile.positionX, tile.positionY);
      this.eventManager.broadcast(new EventWithContent<TileEvent>('changeGridTileState', event));
    }));

    this.eventSubscription.push(this.eventManager.subscribe('endGame', () => {
      this.selectedMode = 'endGame';
    }));

  }

  calculateNextState(oldState: TileState): TileState {

    switch (oldState) {

      case TileState.Empty:
        if (this.selectedMode === 'edit') {
          return TileState.Filled;
        }
        return TileState.Cross

      case TileState.Filled:
        if (this.selectedMode === 'edit') {
          return TileState.Empty;
        }
        return TileState.Cross


      case TileState.Cross:

        if (this.selectedMode === 'edit') {
          return TileState.Filled;
        }
        return TileState.Empty

    }

  }


}
