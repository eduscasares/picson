import { Component, Input, OnInit } from '@angular/core';
import { PuzzleModel } from 'src/app/models/puzzle.model';
import { TileState } from '../grid-tile/grid-tile.component';

@Component({
  selector: 'app-minimap',
  templateUrl: './minimap.component.html',
  styleUrls: ['./minimap.component.scss']
})
export class MinimapComponent implements OnInit {

  @Input()
  public game: TileState[] = [];

  @Input()
  public width: number = 0;

  @Input()
  public height: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
