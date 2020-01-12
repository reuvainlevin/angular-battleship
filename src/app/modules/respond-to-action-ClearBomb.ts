import { IFeatureBoard } from '../store/interfaces/feature-board';
import { ISquare } from '../store/interfaces/square';
import { copy } from './copier';

export const respondToActionClearBomb = (state: IFeatureBoard, id: number): IFeatureBoard => {
    return {
        ...state,
        squares: {
            ...state.squares,
            [id]: {
                ...state.squares[id],
                isBombed: false
            }
        }
    };
};

