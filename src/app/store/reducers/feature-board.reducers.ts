import { ISquare } from './../interfaces/square';
import { IFeatureBoardSpecs } from './../interfaces/feature-board-specs';
import { IFeatureBoard } from '../interfaces/feature-board';
import { createReducer, on, Action } from '@ngrx/store';
import * as featureBoardActions from '../actions/feature-board-state.actions';
import { copy } from 'src/app/modules/copier';
import { getBoard } from 'src/app/modules/get-board';
import { fillBoard } from 'src/app/modules/fill-board';
import { respondToAction_BuildBoard } from 'src/app/modules/respond-to-action-BuildBoard';
import { respondToAction_SetBoard } from 'src/app/modules/respon-to-action-SetBoard';
import { respondToAction_Hit } from 'src/app/modules/respond-to-action-Hit';

export const initState: IFeatureBoard = {
    squares: {}
};

const reducer = createReducer<IFeatureBoard>(
    initState,
    on( featureBoardActions.buildBoard, ( state, { specs } ) => respondToAction_BuildBoard( specs ) ),
    on( featureBoardActions.setBoard, ( state, { specs } ) => respondToAction_SetBoard( specs ) ),
    on( featureBoardActions.hit, ( state, { square } ) => respondToAction_Hit( state, square ) )
);

export function featureBoardReducer( state: IFeatureBoard | undefined, action: Action ) {
    return reducer( state, action );
}









