import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { IFeatureBoard } from '../interfaces/feature-board';


export const getFeatureBoard$ = createFeatureSelector<AppState, IFeatureBoard>( 'featureBoard' );

export const getSquare$ = createSelector(
    getFeatureBoard$,
    ( state: IFeatureBoard, props: any ) => state.squares[props.id]
);




