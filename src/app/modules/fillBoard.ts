import { placeBoat } from './placeBoat';
import { IFeatureBoard } from '../store/interfaces/feature-board';
import { IFeatureBoardSpecs } from '../store/interfaces/feature-board-specs';

export function fillBoard( board: IFeatureBoard, boardSpecs: IFeatureBoardSpecs ): void {
    boardSpecs.boats.forEach( boat => {
        placeBoat( board, boat, boardSpecs.rows, boardSpecs.cols );
    } );
}
