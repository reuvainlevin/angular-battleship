import { getRandomNumber } from './getRandomNumber';
import { IFeatureBoard } from '../store/interfaces/feature-board';
import { IBoatPart } from '../store/interfaces/boat-part';

export function placeBoat(
    board: IFeatureBoard,
    boatSize: number,
    boatId: number,
    boardWidth: number,
    boardHeight: number
): IFeatureBoard {
    boardWidth = boardWidth - 1;  // because of 0 based arrays
    boardHeight = boardHeight - 1;
    let placed = false;
    // let fullBoatLoc = [];
    while ( !placed ) {
        const tmpBoatParts: { row: number, col: number, boatPart: IBoatPart}[] = [];
        let randomRow = getRandomNumber( 0, boardWidth );
        let randomCol = getRandomNumber( 0, boardHeight );
        const randomDir = getRandomNumber( 1, 4 );
        const boatDir = ( randomDir === 1 || randomDir === 2 ) ? 'd' : 'a';
        let boatSpot = ( randomDir === 1 || randomDir === 3 ) ? boatSize : 1;

        for ( let i = 0; i < boatSize; i++ ) {
            if ( i > 0 ) {
                switch ( randomDir ) {
                    case 1: randomRow--;
                            boatSpot--;
                            break;
                    case 2: randomRow++;
                            boatSpot++;
                            break;
                    case 3: randomCol--;
                            boatSpot--;
                            break;
                    case 4: randomCol++;
                            boatSpot++;
                }
            }
            if (
                randomRow < 0 ||
                randomRow > boardWidth ||
                randomCol < 0 ||
                randomCol > boardHeight ||
                board.squares.find( sq => sq.row === randomRow && sq.col === randomCol ).boatPart
            ) {
                break;
            } else {
                tmpBoatParts.push( {
                    row: randomRow,
                    col: randomCol,
                    boatPart: {
                        boatId,
                        boatSize,
                        boatSpot,
                        boatImagePath: ( '' + boatDir + boatSpot + boatSize ),
                        isHit: false
                    }
                } );
            }
        }
        if ( tmpBoatParts.length === boatSize ) {
            tmpBoatParts.forEach( part => {
                board.squares.find( sq => sq.row === part.row && sq.col === part.col ).boatPart = part.boatPart;
            } );
            placed = true;
            // fullBoatLoc = tmpBoatParts;
        }
    }

    return board;
}
