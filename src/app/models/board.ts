import { IBoard } from './../interfaces/board';
import { ISquare } from '../interfaces/square';
export class Board implements IBoard {
    squares: ISquare[];
    constructor() {
        this.squares = [];
    }
}
