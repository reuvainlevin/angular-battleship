import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { IFeatureBoardSpecs } from '../interfaces/feature-board-specs';

export const getFeatureBoardSpecs$ = createFeatureSelector<AppState, IFeatureBoardSpecs>( 'featureBoardSpecs' );

export const getRowsCols$ = createSelector(
    getFeatureBoardSpecs$,
    ( state: IFeatureBoardSpecs ) => {
        return { rows: state.rows, cols: state.cols };
    }
);

export const getRows$ = createSelector(
    getFeatureBoardSpecs$,
    ( state: IFeatureBoardSpecs ) => {
        return state.rows;
    }
);


export const getCols$ = createSelector(
    getFeatureBoardSpecs$,
    ( state: IFeatureBoardSpecs ) => {
        return state.cols;
    }
);


export const getBoats$ = createSelector(
    getFeatureBoardSpecs$,
    ( state: IFeatureBoardSpecs ) => state.boats
);




