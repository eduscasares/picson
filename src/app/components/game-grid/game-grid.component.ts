import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { last, Subscription } from 'rxjs';
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
  public game: TileState[] = [];

  public rowIndicators: number[][] = [];

  constructor(private eventManager: EventManager) { }

  ngOnInit() {

    this.gameInit();

    this.eventSubscription.push(this.eventManager.subscribe('changeGridTileState', (tileEvent: TileEvent) => {

      this.game[this.puzzleModel.width * tileEvent.positionX + tileEvent.positionY] = tileEvent.fromState;

      this.checkRowIndicator(tileEvent.positionX);
      this.checkColIndicator(tileEvent.positionY);

      this.checkGame();

    }));


    this.eventSubscription.push(this.eventManager.subscribe('restartGame', () => {
      this.gameInit();
    }));
  }

  gameInit() {
    this.game = new Array(this.puzzleModel.imageData.length).fill(TileState.Empty);
    this.rowIndicators = new Array(this.puzzleModel.rows.length).fill([]);
  }

  checkGame(): void {
    for (let i = 0; i < this.game.length; i++) {
      if (this.puzzleModel.imageData[i] != this.game[i]) {

        if (this.puzzleModel.imageData[i] == TileState.Filled ||
          this.game[i] == TileState.Filled) {
          return;
        }
      }
    }

    this.eventManager.broadcast('endGame');
  }


  private checkRowIndicator(row: number) {
    let groups = this.getRowGroups(row);

  }

  private checkColIndicator(col: number) {
    let groups = this.getColGroups(col);

  }

  private getRowGroups(x: number): number[] {

    let row = this.game.slice(this.puzzleModel.width * x, this.puzzleModel.width * x + 10);
    return this.arrayGroup(row);
  }

  private getColGroups(y: number): number[] {

    let col: number[] = [];

    for (let i = 0; i < this.puzzleModel.height; i++) {
      col.push(this.game[this.puzzleModel.height * i + y]);
    }

    this.game.slice(this.puzzleModel.width * y, this.puzzleModel.width * y + 10);
    return this.arrayGroup(col);
  }

  private arrayGroup(array: number[]): number[] {
    let groups: number[] = [];
    let currentValue = -1;
    let lastValue = -1;
    let acc = 0;


    array.forEach(item => {

      lastValue = currentValue;
      currentValue = item;

      if (currentValue == 1) {
        acc++;
        return;
      }

      // end group
      if (lastValue == 1) {
        if (lastValue != currentValue) {
          groups.push(acc);
          acc = 0;
        }
      }
    });

    return groups;
  }
}
