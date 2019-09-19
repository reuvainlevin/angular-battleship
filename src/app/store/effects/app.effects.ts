import { Board } from './../../models/board';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map } from 'rxjs/operators';
import { setBoard } from '../actions/feature-board-state.actions';

@Injectable()
export class AppEffects {
  boardStart$ = createEffect(
    () => this.actions$.pipe(
      ofType( GameStateActionTypes.StartGame ),
      map( a => console.log( 'talking from an effect', a )),
      switchMap(
          () => this.store.pipe(
            select( getFeatureBoardSpecs$ ),
            map( specs => new Board( specs )  ),
            map( board => setBoard( { board } ) )
        )
      )
    )
  );

  constructor( private actions$: Actions, private store: Store<AppState>  ) { }
}
