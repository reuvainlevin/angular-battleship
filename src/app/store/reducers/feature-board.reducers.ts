import { ISquare } from './../interfaces/square';
import { IFeatureBoard } from '../interfaces/feature-board';
import { createReducer, on, Action } from '@ngrx/store';
import * as featureBoardActions from '../actions/feature-board-state.actions';

export const initState: IFeatureBoard = {
    squares: { }
};

const reducer = createReducer<IFeatureBoard>(
    initState,
    on( featureBoardActions.setBoard, ( state, { board } ) => ( { squares: board.squares }  ) )
);

export function featureBoardReducer( state: IFeatureBoard | undefined, action: Action ) {
    return reducer( state, action );
}
