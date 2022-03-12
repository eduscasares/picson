import { TileState } from "../components/grid-tile/grid-tile.component";

export class TileEvent {

    constructor(
        public fromState: TileState,
        public positionX: number,
        public positionY: number) {
    }

} 