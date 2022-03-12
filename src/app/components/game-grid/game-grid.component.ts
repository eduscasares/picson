import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileEvent } from 'src/app/events/tile.event';
import { PuzzleModel } from 'src/app/models/puzzle.model';
import { EventManager } from 'src/app/services/event-manager.service';
import { JsonParserService } from 'src/app/services/json-parser.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent implements OnInit {

  public puzzleModel: PuzzleModel = this.jsonParser.getPuzzleData();
  public eventSubscription: Subscription[] = [];


  constructor(public jsonParser: JsonParserService,
    public eventManager: EventManager) { }

  ngOnInit(): void {

    this.eventSubscription.push(this.eventManager.subscribe('gridTileClicked', (position: TileEvent) => {

    }));
  }

}
