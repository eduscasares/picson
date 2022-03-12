export interface IPuzzleModel {
    width: number;
    height: number;
    imageData: number[];
    rows: Array<number[]>;
    cols: Array<number[]>;
}

export class PuzzleModel implements IPuzzleModel {
    width: number = 0;
    height: number = 0;
    imageData: number[] = [];
    rows: number[][] = [];
    cols: number[][] = [];

}