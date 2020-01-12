import { prepareBoard, startGame, pauseGame, continueGame, endGame } from 'src/app/store/actions/feature-game-state.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map, tap } from 'rxjs/operators';
import { setBoard, hit, blank, buildBoard, click } from '../actions/feature-board-state.actions';
import { bomb, clearBomb } from '../actions/bombing.actions';
import { of } from 'rxjs/internal/observable/of';
import { getRandomNumber } from 'src/app/modules/get-random-number';

@Injectable()
export class AppEffects {

  prepareBoard$ = createEffect(
    () => this.actions$.pipe(
      ofType(prepareBoard),
      switchMap(
        (t) => this.store.pipe(
          select(getFeatureBoardSpecs$),
          map(specs => buildBoard({ specs }))
        )
      )
    )
  );

  startGame$ = createEffect(
    () => this.actions$.pipe(
      ofType(startGame),
      switchMap(
        () => this.store.pipe(
          // TODO
          // this should be ina reducer function, this should be reconstructed to not need an effect
          select(getFeatureBoardSpecs$),
          map(specs => setBoard({ specs }))
        )
      )
    )
  );

  click$ = createEffect(
    () => this.actions$.pipe(
      ofType(click),
      switchMap(a => {
        // TODO
        // this should be ina reducer function, we don't need an effect for this
        return ((a.square && a.square.boatPart)) ? of(hit({ square: a.square })) : of(blank());
      }
      )
    )
  );


  // TODO
  // move boming code to it's own effect class
  startBomb$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        startGame,
        continueGame
      ),
      tap(t => this.startBombing())
    ),
    { dispatch: false }
  );

  pauseBomb$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        pauseGame,
        endGame
      ),
      tap(t => clearInterval(this.shooter))
    ),
    { dispatch: false }
  );

  shooter: NodeJS.Timer;

  startBombing (): void {
    this.shooter = setInterval(() => this.bomb(), 1000);
  }

  bomb (): void {
    const randomRow = getRandomNumber(0, 6).toString();
    const randomCol = getRandomNumber(0, 6).toString();

    const id = randomRow + randomCol;

    this.store.dispatch(bomb({ id }));

    setTimeout(() => {
      this.store.dispatch(clearBomb({ id }));
    }, 300);
  }



  constructor (private actions$: Actions, private store: Store<AppState>) { }
}
