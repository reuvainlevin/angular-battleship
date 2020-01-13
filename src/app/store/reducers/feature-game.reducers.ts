import { GameState } from './../enums/game-states';
import { IFeatureGameStatus } from '../interfaces/feature-game-status';
import { createReducer, on, Action } from '@ngrx/store';
import * as gameStateActions from '../feature-board-specs/actions/feature-game-state.actions';

export const initState: IFeatureGameStatus = {
    gameState: GameState.IS_NOT_STARTED
};

const reducer = createReducer<IFeatureGameStatus>(
    initState,
    on(
        gameStateActions.startGame,
        state => ( {
            gameState: GameState.IS_IN_PLAY
        } )
    ),
    on(
        gameStateActions.pauseGame,
        state => ( {
            gameState: GameState.IS_PAUSED
        } )
    ),
    on(
        gameStateActions.continueGame,
        state => ( {
            gameState: GameState.IS_IN_PLAY
        } )
    ),
    on(
        gameStateActions.endGame,
        state => ( {
            gameState: GameState.IS_OVER
        } )
    )
);

export function featureGameStateReducer( state: IFeatureGameStatus | undefined, action: Action ) {
    return reducer( state, action );
}
