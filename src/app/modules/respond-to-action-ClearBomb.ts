import { IFeatureBoard } from '../store/interfaces/feature-board';

export const respondToActionClearBomb = (
    state: IFeatureBoard,
    id: string
): IFeatureBoard => ({
    ...state,
    squares: {
        ...state.squares,
        [id]: {
            ...state.squares[id],
            isBombed: false
        }
    }
});



