import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeatureBoard } from '../interfaces/feature-board';
import { AppState } from '../../app-state/interfaces/app-state';


export const getFeatureBoard$ = createFeatureSelector<AppState, IFeatureBoard>('featureBoard');

export const getSquare$ = createSelector(
    getFeatureBoard$,
    (state: IFeatureBoard, props: any) => state.squares[props.id]
);




