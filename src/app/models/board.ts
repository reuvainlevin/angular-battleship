import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';
export class Board implements IFeatureBoard {
    squares: ISquare[];
    constructor() {
        this.squares = [];
    }
}
