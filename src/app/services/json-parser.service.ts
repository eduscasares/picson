import { Injectable } from '@angular/core';
import { IPuzzleModel, PuzzleModel } from '../models/puzzle.model';

@Injectable({
  providedIn: 'root'
})
export class JsonParserService {

  constructor() { }

  data: IPuzzleModel = {
    width: 10,
    height: 10,
    imageData: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    rows: [[10], [1, 1], [1, 6, 1], [1, 6, 1], [1, 4, 1], [1, 4, 1], [1, 2, 1], [1, 2, 1], [1, 1], [4]],
    cols: [[5], [1, 3], [1, 2, 1], [1, 4, 1], [1, 6, 1], [1, 6, 1], [1, 4, 1], [1, 2, 1], [1, 3], [5]]
  };

  getPuzzleData(): PuzzleModel {
    return this.data;
  }

}
