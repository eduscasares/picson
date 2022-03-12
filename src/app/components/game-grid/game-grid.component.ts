import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileEvent } from 'src/app/events/tile.event';
import { PuzzleModel } from 'src/app/models/puzzle.model';
import { EventManager } from 'src/app/services/event-manager.service';
import { TileState } from '../grid-tile/grid-tile.component';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent implements OnInit {

  @Input()
  public puzzleModel!: PuzzleModel;

  private eventSubscription: Subscription[] = [];
  private game: TileState[] = [];

  constructor(private eventManager: EventManager) { }

  ngOnInit() {

    this.game = [this.puzzleModel.imageData.length];

    this.eventSubscription.push(this.eventManager.subscribe('changeGridTileState', (tileEvent: TileEvent) => {

      this.game[this.puzzleModel.width * tileEvent.positionY + tileEvent.positionY] = tileEvent.fromState;

    }));
  }

  checkGame() {

  }

}
