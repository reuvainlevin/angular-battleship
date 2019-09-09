import { IFeatureGameState } from './../interfaces/feature-game-state';
import { AppState } from './../interfaces/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getFeatureGameState$ = createFeatureSelector<AppState, IFeatureGameState>( 'featureGameState' );

export const getGameStarted$ = createSelector(
    getFeatureGameState$,
    (state: IFeatureGameState) => state.isStarted
);

export const getGamePaused$ = createSelector(
    getFeatureGameState$,
    ( state: IFeatureGameState ) => state.isPaused
);

export const getGameEnded$ = createSelector(
    getFeatureGameState$,
    ( state: IFeatureGameState ) => state.isEnded
);


