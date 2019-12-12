import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';
import { copy } from './copier';

export const respondToActionHit = ( state: IFeatureBoard, square: ISquare ): IFeatureBoard => {
    console.log( 'im in the hit reducer' )
    const newSquares = copy( state.squares );
    newSquares[ square.id ].boatPart.isHit = true;
    return {
        squares: newSquares
    };
};
