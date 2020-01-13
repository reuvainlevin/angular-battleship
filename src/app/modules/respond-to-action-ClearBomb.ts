import { IFeatureBoard } from '../store/feature-board/interfaces/feature-board';

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



