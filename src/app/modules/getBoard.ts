import { Board } from './../models/board';
import { IFeatureBoard } from '../store/interfaces/feature-board';

export function getBoard( rows: number, cols: number): IFeatureBoard {
    const board = new Board();
    let id = 1;

    for ( let row = 0; row < rows; row++) {
        for ( let col = 0; col < cols; col++ ) {
            board.squares.push( {
                id: id++,
                row,
                col
            } );
        }
    }

    return board;
}
