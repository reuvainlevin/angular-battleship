import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';

export const respondToActionBomb = (state: IFeatureBoard, id: number): IFeatureBoard => {
    return {
        ...state,
        squares: {
            ...state.squares,
            [id]: {
                ...state.squares[id],
                isBombed: true
            }
        }
    };
};

