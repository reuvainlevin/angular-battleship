import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';
import { copy } from './copier';

export function respondToAction_Hit( state: IFeatureBoard, square: ISquare ): IFeatureBoard {
    const newSquares = copy( state.squares );
    newSquares[ square.id ].boatPart.isHit = true;
    return {
        squares: newSquares
    };
}
