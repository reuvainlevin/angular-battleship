import { IFeatureBoard } from '../interfaces/feature-board';
import { createReducer, on, Action } from '@ngrx/store';
import * as featureBoardActions from '../actions/feature-board-state.actions';
import * as bombingActions from '../actions/bombing.actions';
import { respondToActionBuildBoard } from 'src/app/modules/respond-to-action-BuildBoard';
import { respondToActionSetBoard } from 'src/app/modules/respon-to-action-SetBoard';
import { respondToActionHit } from 'src/app/modules/respond-to-action-Hit';
import { respondToActionBomb } from 'src/app/modules/respond-to-action-Bomb';
import { respondToActionClearBomb } from 'src/app/modules/respond-to-action-ClearBomb';

export const initState: IFeatureBoard = {
    squares: {}
};

const reducer = createReducer<IFeatureBoard>(
    initState,
    on(
        featureBoardActions.buildBoard,
        (state, { specs }) => respondToActionBuildBoard(specs)
    ),
    on(
        featureBoardActions.setBoard,
        (state, { specs }) => respondToActionSetBoard(specs)
    ),
    on(
        featureBoardActions.hit,
        (state, { square }) => respondToActionHit(state, square)
    ),
    on(
        bombingActions.bomb,
        (state, { id }) => respondToActionBomb(state, id)
    ),
    on(
        bombingActions.clearBomb,
        (state, { id }) => respondToActionClearBomb(state, id)
    )
);

export function featureBoardReducer(state: IFeatureBoard | undefined, action: Action) {
    return reducer(state, action);
}









