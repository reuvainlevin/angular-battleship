import { GameState } from './../../store/enums/game-states';
import { clearBomb } from './../../store/actions/bombing.actions';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getGameState$ } from 'src/app/store/selectors/feature-game.selectors';
import { AppState } from 'src/app/store/interfaces/app-state';
import { startGame, pauseGame, continueGame, endGame } from 'src/app/store/actions/feature-game-state.actions';
import { bomb } from 'src/app/store/actions/bombing.actions';
import { getFeatureBoardSpecs$ } from 'src/app/store/selectors/feature-board-specs.selectors';
import { IFeatureBoardSpecs } from 'src/app/store/interfaces/feature-board-specs';

@Component( {
  selector: 'app-sb-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [ './control-panel.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ControlPanelComponent implements OnInit {
  gameState$: Observable<GameState>;

  GameState = GameState;

  constructor ( private store: Store<AppState> ) { }

  ngOnInit() {
    this.gameState$ = this.store.pipe( select( getGameState$ ) );
  }

  startGame(): void {
    this.store.dispatch( startGame() );
    // setInterval( () => {
    //   console.log( 'am i shooting???' );
    //   this.store.dispatch( bomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } ) );
    //   this.clearBomb();
    // }, 500 );
  }
  clearBomb() {
    // setInterval( () => {
    //   console.log( 'am i shooting???' );
    //   this.store.dispatch( clearBomb( { square: { id: 10, row: '1', col: '0', isBombed: false, bombImagePath: 'bomb' } } ) );

    // }, 500 );
  }

  pauseGame(): void {
    this.store.dispatch( pauseGame() );
  }

  continueGame(): void {
    this.store.dispatch( continueGame() );
  }

  endGame(): void {
    this.store.dispatch( endGame() );
  }

}
