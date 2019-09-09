import { Action, createAction } from '@ngrx/store';

export enum GameStateActionTypes {
  StartGame = '[Game State] Start Game',
  PauseGame = '[Game State] Pause Game',
  ContinueGame = '[Game State] Continue Game',
  EndGame = '[Game State] End Game'
}


export const startGame = createAction( GameStateActionTypes.StartGame );

export const pauseGame = createAction( GameStateActionTypes.PauseGame );

export const continueGame = createAction( GameStateActionTypes.ContinueGame );

export const endGame = createAction( GameStateActionTypes.EndGame );

