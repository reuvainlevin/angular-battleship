import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';

export const respondToActionHit = (
    state: IFeatureBoard,
    square: ISquare
): IFeatureBoard => ({
    ...state,
    squares: {
        ...state.squares,
        [square.id]: {
            ...state.squares[square.id],
            isBombed: false,
            boatPart: {
                ...state.squares[square.id].boatPart,
                isHit: true
            }
        }
    }
});



