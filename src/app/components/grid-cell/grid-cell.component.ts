import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss']
})
export class GridCellComponent implements OnInit {

  @Input()
  public width: number = 24;

  @Input()
  public height: number = 24;

  constructor() { }

  ngOnInit(): void {
  }

}
