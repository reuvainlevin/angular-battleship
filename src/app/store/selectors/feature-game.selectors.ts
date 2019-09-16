import { IFeatureGameStatus } from '../interfaces/feature-game-status';
import { AppState } from '../interfaces/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getFeatureGameStatus$ = createFeatureSelector<AppState, IFeatureGameStatus>( 'featureGameStatus' );

export const getGameStarted$ = createSelector(
    getFeatureGameStatus$,
    (state: IFeatureGameStatus) => state.isStarted
);

export const getGamePaused$ = createSelector(
    getFeatureGameStatus$,
    ( state: IFeatureGameStatus ) => state.isPaused
);

export const getGameEnded$ = createSelector(
    getFeatureGameStatus$,
    ( state: IFeatureGameStatus ) => state.isEnded
);


