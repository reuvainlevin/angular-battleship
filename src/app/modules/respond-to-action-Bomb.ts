import { IFeatureBoard } from '../store/interfaces/feature-board';

export const respondToActionBomb = (
    state: IFeatureBoard,
    id: string
): IFeatureBoard => ({
    ...state,
    squares: {
        ...state.squares,
        [id]: {
            ...state.squares[id],
            isBombed: true,
            boatPart: state.squares[id].boatPart ? {
                ...state.squares[id].boatPart,
                isHit: false
            } : null
        }
    }
});

