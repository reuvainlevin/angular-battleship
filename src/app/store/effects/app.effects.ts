import { BombingActionTypes, clearBomb } from './../actions/bombing.actions';
import { ISquare } from './../interfaces/square';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map, tap } from 'rxjs/operators';
import { setBoard, FeatureBoardActionTypes, hit, blank, buildBoard } from '../actions/feature-board-state.actions';
import { bomb } from '../actions/bombing.actions';
import { getGameState$ } from '../selectors/feature-game.selectors';
import { interval } from 'rxjs/internal/observable/interval';
import { of } from 'rxjs/internal/observable/of';
import { GameState } from '../enums/game-states';

@Injectable()
export class AppEffects {

  prepareBoard$ = createEffect(
    () => this.actions$.pipe(
      ofType(GameStateActionTypes.PrepareBoard),
      switchMap(
        () => this.store.pipe(
          select(getFeatureBoardSpecs$),
          switchMap(specs => { console.log('in the sart prepare effect'); return of(buildBoard({ specs })) })
        )
      )
    )
  );

  startGame$ = createEffect(
    () => this.actions$.pipe(
      ofType(GameStateActionTypes.StartGame),
      switchMap(
        () => this.store.pipe(
          // TODO
          // this should be ina reducer function, this should be reconstructed to not need an effect
          select(getFeatureBoardSpecs$),
          tap(t => this.startBombing()),
          switchMap(specs => { console.log('in the sart game effect'); return of(setBoard({ specs })) })
        )
      )
    )
  );

  click$ = createEffect(
    () => this.actions$.pipe(
      ofType(FeatureBoardActionTypes.Click),
      switchMap((a: { square: ISquare, type: string }) => {
        // TODO
        // this should be ina reducer function, we don't need an effect for this
        return ((a.square && a.square.boatPart)) ? of(hit({ square: a.square })) : of(blank());
      }
      )
    )
  );




  pauseBomb$ = createEffect(
    () => this.actions$.pipe(
      ofType(GameStateActionTypes.PauseGame),
      tap(t => clearInterval(this.shooter))
    ),
    { dispatch: false }
  );

  continueBomb$ = createEffect(
    () => this.actions$.pipe(
      ofType(GameStateActionTypes.ContinueGame),
      tap(t => this.startBombing())
    ),
    { dispatch: false }
  );

  shooter: NodeJS.Timer;

  startBombing(): void {
    this.shooter = setInterval(() => this.bomb(), 1000);
  }

  bomb(): void {
    this.store.dispatch(bomb({ id: 10 }));

    setTimeout(() => {
      this.store.dispatch(clearBomb({ id: 10 }));
    }, 300);
  }



  constructor (private actions$: Actions, private store: Store<AppState>) { }
}
