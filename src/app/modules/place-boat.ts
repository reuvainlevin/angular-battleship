import { getRandomNumber } from './get-random-number';
import { IFeatureBoard } from '../store/interfaces/feature-board';
import { IBoatPart } from '../store/interfaces/boat-part';
import { IBoat } from '../store/interfaces/boat';

export function placeBoat(
    board: IFeatureBoard,
    boat: IBoat,
    rows: number,
    cols: number
): IFeatureBoard {
    rows = rows - 1;  // because of 0 based arrays
    cols = cols - 1;
    let placed = false;
    while ( !placed ) {
        const tmpBoatParts: { row: number, col: number, boatPart: IBoatPart }[] = [];
        let randomRow = getRandomNumber( 0, rows );
        let randomCol = getRandomNumber( 0, cols );
        const randomDir = getRandomNumber( 1, 4 );
        const boatDir = ( randomDir === 1 || randomDir === 2 ) ? 'd' : 'a';
        let boatSpot = ( randomDir === 1 || randomDir === 3 ) ? boat.size : 1;

        for ( let i = 0; i < boat.size; i++ ) {
            if ( i > 0 ) {
                switch ( randomDir ) {
                    case 1:
                        randomRow--;
                        boatSpot--;
                        break;
                    case 2:
                        randomRow++;
                        boatSpot++;
                        break;
                    case 3:
                        randomCol--;
                        boatSpot--;
                        break;
                    case 4:
                        randomCol++;
                        boatSpot++;
                }
            }
            if (
                randomRow < 0 ||
                randomRow > rows ||
                randomCol < 0 ||
                randomCol > cols ||
                board.squares[ randomRow.toString() + randomCol.toString() ].boatPart
            ) {
                break;
            } else {
                tmpBoatParts.push( {
                    row: randomRow,
                    col: randomCol,
                    boatPart: {
                        boatId: boat.id,
                        boatSize: boat.size,
                        boatSpot,
                        boatImagePath: ( '' + boatDir + boatSpot + boat.size ),
                        isHit: false
                    }
                } );
            }
        }
        if ( tmpBoatParts.length === boat.size ) {
            tmpBoatParts.forEach( part => {
                board.squares[ part.row.toString() + part.col.toString() ].boatPart = part.boatPart;
            } );
            placed = true;
        }
    }

    return board;
}
