import { ISquare } from './../interfaces/square';
import { Board } from './../../models/board';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map } from 'rxjs/operators';
import { setBoard, FeatureBoardActionTypes, hit, blank } from '../actions/feature-board-state.actions';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {

  boardStart$ = createEffect(
    () => this.actions$.pipe(
      ofType( GameStateActionTypes.StartGame ),
      switchMap(
        () => this.store.pipe(
          select( getFeatureBoardSpecs$ ),
          map( specs => new Board( specs ) ),
          map( board => setBoard( { board } ) )
        )
      )
    )
  );

  click$ = createEffect(
    () => this.actions$.pipe(
      ofType( FeatureBoardActionTypes.Click ),
      map(
        ( a: { square: ISquare, type: string } ) => a.square.boatPart ? hit( { square: a.square } ) : blank()
      ),
    )
  );

  constructor( private actions$: Actions, private store: Store<AppState> ) { }
}
