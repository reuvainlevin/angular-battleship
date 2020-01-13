import { IFeatureGameStatus } from '../interfaces/feature-game-status';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app-state/interfaces/app-state';


export const getFeatureGameStatus$ = createFeatureSelector<AppState, IFeatureGameStatus>('featureGameStatus');

export const getGameState$ = createSelector(
    getFeatureGameStatus$,
    (state: IFeatureGameStatus) => state.gameState
);


