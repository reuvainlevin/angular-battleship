import { IFeatureBoard } from '../interfaces/feature-board';
import { createReducer, on, Action } from '@ngrx/store';
import { IFeatureBoardSpecs } from '../interfaces/feature-board-specs';

export const initState: IFeatureBoardSpecs = {
    rows: 7,
    cols: 7,
    numOfBoats: 5,
    boatSizes: [ 2, 3, 3, 4, 5 ],
    boats: [
        {
            id: 1,
            size: 2,
            isBeingTracked: false
        },
        {
            id: 2,
            size: 3,
            isBeingTracked: false
        },
        {
            id: 3,
            size: 3,
            isBeingTracked: false
        },
        {
            id: 4,
            size: 4,
            isBeingTracked: false
        },
        {
            id: 5,
            size: 5,
            isBeingTracked: false
        }
    ]
};

const reducer = createReducer<IFeatureBoardSpecs>(
    initState
);

export function featureBoardSpecsReducer( state: IFeatureBoardSpecs | undefined, action: Action ) {
    return reducer( state, action );
}
