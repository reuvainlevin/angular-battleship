import { ISquare } from './../interfaces/square';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map } from 'rxjs/operators';
import { setBoard, FeatureBoardActionTypes, hit, blank, buildBoard } from '../actions/feature-board-state.actions';

@Injectable()
export class AppEffects {

  prepareBoard$ = createEffect(
    () => this.actions$.pipe(
      ofType( GameStateActionTypes.PrepareBoard ),
      switchMap(
        () => this.store.pipe(
          select( getFeatureBoardSpecs$ ),
          map( specs => buildBoard( { specs } ) )
        )
      )
    )
  );

  startGame$ = createEffect(
    () => this.actions$.pipe(
      ofType( GameStateActionTypes.StartGame ),
      switchMap(
        () => this.store.pipe(
          select( getFeatureBoardSpecs$ ),
          map( specs => setBoard( { specs } ) )
        )
      )
    )
  );

  click$ = createEffect(
    () => this.actions$.pipe(
      ofType( FeatureBoardActionTypes.Click ),
      map(
        ( a: { square: ISquare, type: string } ) => ( a.square && a.square.boatPart ) ? hit( { square: a.square } ) : blank()
      ),
    )
  );

  constructor ( private actions$: Actions, private store: Store<AppState> ) { }
}
