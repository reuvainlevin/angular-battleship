import { createAction } from '@ngrx/store';

export enum GameStateActionTypes {
  PrepareBoard = '[Game State] Prepare Board',
  StartGame = '[Game State] Start Game',
  PauseGame = '[Game State] Pause Game',
  ContinueGame = '[Game State] Continue Game',
  EndGame = '[Game State] End Game'
}

export const prepareBoard = createAction(GameStateActionTypes.PrepareBoard);

export const startGame = createAction(GameStateActionTypes.StartGame);

export const pauseGame = createAction(GameStateActionTypes.PauseGame);

export const continueGame = createAction(GameStateActionTypes.ContinueGame);

export const endGame = createAction(GameStateActionTypes.EndGame);

