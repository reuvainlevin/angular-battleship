import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';
import { IFeatureBoardSpecs } from '../store/interfaces/feature-board-specs';
import { placeBoat } from '../modules/placeBoat';
export class Board implements IFeatureBoard {
    squares = {};
    constructor( private boardSpecs: IFeatureBoardSpecs ) {
        this.squares = this.getBoard( this.boardSpecs.rows, this.boardSpecs.cols );
        this.fillBoard( this, this.boardSpecs );
    }

    private getBoard( rows: number, cols: number ): {[id: string]: ISquare} {
        const squares = {};
        let id = 1;

        for ( let row = 0; row < rows; row++ ) {
            for ( let col = 0; col < cols; col++ ) {
                squares[row.toString() + col.toString()] = {
                    id: id++,
                    row,
                    col
                };
            }
        }

        return squares;
    }

    private fillBoard( board: IFeatureBoard, boardSpecs: IFeatureBoardSpecs ): void {
        boardSpecs.boats.forEach( boat => {
            placeBoat( board, boat, boardSpecs.rows, boardSpecs.cols );
        } );
    }

    // private adddBoat( board: IFeatureBoard, boardSpecs:  ): void {

    // }

}
