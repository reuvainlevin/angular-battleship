import { IFeatureBoard } from '../interfaces/feature-board';
import { createReducer, on, Action } from '@ngrx/store';
import * as featureBoardActions from '../actions/feature-board-state.actions';
import { copy } from 'src/app/modules/copier';
import { getBoard } from 'src/app/modules/get-board';
import { fillBoard } from 'src/app/modules/fillBoard';

export const initState: IFeatureBoard = {
    squares: {}
};

const reducer = createReducer<IFeatureBoard>(
    initState,
    on( featureBoardActions.buildBoard, ( state, { specs } ) => ( { squares: getBoard( specs.rows, specs.cols )})),
    on( featureBoardActions.setBoard, ( state, { specs } ) => {
        const squares = getBoard( specs.rows, specs.cols );
        fillBoard( { squares }, specs );
        return {
            squares
        };
    } ),
    on( featureBoardActions.hit, ( state, { square } ) => {
        const newSquares = copy( state.squares );
        newSquares[ square.id ].boatPart.isHit = true;
        return {
            squares: newSquares
        };
    } )
);

export function featureBoardReducer( state: IFeatureBoard | undefined, action: Action ) {
    return reducer( state, action );
}



