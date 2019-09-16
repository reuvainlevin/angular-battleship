import { IFeatureGameStatus } from '../interfaces/feature-game-status';
import { createReducer, on, Action } from '@ngrx/store';
import * as gameStateActions from '../actions/feature-game-state.actions';

export const initState: IFeatureGameStatus = {
    isStarted: false,
    isPaused: false,
    isEnded: false
};

const reducer = createReducer<IFeatureGameStatus>(
    initState,
    on( gameStateActions.startGame, state => ( { isStarted: true, isPaused: false, isEnded: false } ) ),
    on( gameStateActions.pauseGame, state => ( { isStarted: true, isPaused: true, isEnded: false } ) ),
    on( gameStateActions.continueGame, state => ( { isStarted: true, isPaused: false, isEnded: false } ) ),
    on( gameStateActions.endGame, state => ( { isStarted: false, isPaused: false, isEnded: true } ) )
);

export function featureGameStateReducer( state: IFeatureGameStatus | undefined, action: Action ) {
    return reducer( state, action );
}
