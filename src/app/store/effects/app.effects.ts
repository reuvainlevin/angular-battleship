import { BombingActionTypes } from './../actions/bombing.actions';
import { ISquare } from './../interfaces/square';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { GameStateActionTypes } from '../actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../selectors/feature-board-specs.selectors';
import { switchMap, map } from 'rxjs/operators';
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
      ofType( GameStateActionTypes.PrepareBoard ),
      switchMap(
        () => this.store.pipe(
          select( getFeatureBoardSpecs$ ),
          switchMap( specs => { console.log( 'in the sart prepare effect' ); return of( buildBoard( { specs } ) ) } )
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
          switchMap( specs => { console.log( 'in the sart game effect' ); return of( setBoard( { specs } ) ) } )
        )
      )
    )
  );

  click$ = createEffect(
    () => this.actions$.pipe(
      ofType( FeatureBoardActionTypes.Click ),
      switchMap( ( a: { square: ISquare, type: string } ) => {
        if ( ( a.square && a.square.boatPart ) ) {
          return of( hit( { square: a.square } ) );
        } else {
          return of( blank() );
        }
      } )
    )
  );


  // shooter$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(
  //       GameStateActionTypes.StartGame,
  //       GameStateActionTypes.PauseGame,
  //       GameStateActionTypes.ContinueGame,
  //       GameStateActionTypes.EndGame
  //     ),
  //     // interval( 1000 ),
  //     switchMap( () => this.store.pipe( select( getGameState$ ) ) ),
  //     map( t => {
  //       console.log( 'shooooooooooooooooooting' );
  //     }),
  //     map( state => bomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } ))
  //     )
  //   );

  // handle the shooter

  // shooter$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(
  //       GameStateActionTypes.StartGame,
  //       GameStateActionTypes.PauseGame,
  //       GameStateActionTypes.ContinueGame,
  //       GameStateActionTypes.EndGame
  //     ),
  //     // start shooting
  //     map( ( a: { type: string } ) => {
  //       switch ( a.type ) {
  //         case GameStateActionTypes.StartGame:
  //           console.log( 'Shootin Mode: GameStateActionTypes.StartGame' );
  //           setInterval( () => {
  //             console.log( 'am i shooting???' );
  //             return bomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } );
  //           }, 500 );
  //           break;
  //         case GameStateActionTypes.PauseGame:
  //           console.log( 'Shootin Mode: GameStateActionTypes.PauseGame' );
  //           break;
  //         case GameStateActionTypes.ContinueGame:
  //           console.log( 'Shootin Mode: GameStateActionTypes.ContinueGame' );
  //           break;
  //         case GameStateActionTypes.EndGame:
  //           console.log( 'Shootin Mode: GameStateActionTypes.EndGame' );
  //           break;
  //       }
  //       return blank();
  //     } )
  //   )
  // );

  // shoot$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType( BombingActionTypes.Bomb ),
  //     map(
  //       ( a: { square: ISquare, type: string } ) =>
  //          bomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } )
  //     ),
  //   )
  // );

  // shooter$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType( BombingActionTypes.Bomb ),
  //     interval(),
  //     map(
  //       ( a: { square: ISquare, type: string } ) =>
  //         bomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } )
  //     ),
  //   )
  // );


  // pauseShooting$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType( GameStateActionTypes.PauseGame ),
  //     // pause shooting
  //     map( a => {
  //       console.log( 'Shootin Mode: ', a )
  //       return blank();
  //     } )
  //   )
  // );

  // continueShooting$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType( GameStateActionTypes.ContinueGame ),
  //     // continue shooting
  //     map( a => {
  //       console.log( 'Shootin Mode: ', a )
  //       return blank();
  //     } )
  //   )
  // );

  // stopShooting$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType( GameStateActionTypes.EndGame ),
  //     // stop shooting
  //     map( a => {
  //       console.log( 'Shootin Mode: ', a )
  //       return blank();
  //     } )
  //   )
  // );

  constructor ( private actions$: Actions, private store: Store<AppState> ) { }
}
