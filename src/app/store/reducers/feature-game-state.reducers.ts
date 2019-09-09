import { IFeatureGameState } from '../interfaces/feature-game-state';
import { createReducer, on, Action } from '@ngrx/store';
import * as gameStateActions from '../actions/game-state.actions';

export const initState: IFeatureGameState = {
    isStarted: false,
    isPaused: false,
    isEnded: false
};

const reducer = createReducer<IFeatureGameState>(
    initState,
    on( gameStateActions.startGame, state => ( { isStarted: true, isPaused: false, isEnded: false } ) ),
    on( gameStateActions.pauseGame, state => ( { isStarted: true, isPaused: true, isEnded: false } ) ),
    on( gameStateActions.continueGame, state => ( { isStarted: true, isPaused: false, isEnded: false } ) ),
    on( gameStateActions.endGame, state => ( { isStarted: false, isPaused: false, isEnded: true } ) )
);

export function featureGameStateReducer( state: IFeatureGameState | undefined, action: Action ) {
    return reducer( state, action );
}
