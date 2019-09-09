import {startGame, pauseGame, endGame, continueGame} from './store/actions/game-state.actions';
import { getGameStarted$, getGamePaused$, getGameEnded$ } from './store/selectors/feature-game-state.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/interfaces/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'speed-battleship';

  isStarted$: Observable<boolean>;
  isPaused$: Observable<boolean>;
  isEnded$: Observable<boolean>;

  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.isStarted$ = this.store.pipe( select( getGameStarted$ ) );
    this.isPaused$ = this.store.pipe( select( getGamePaused$ ) );
    this.isEnded$ = this.store.pipe( select( getGameEnded$ ) );
  }

  startGame(): void {
    this.store.dispatch( startGame() );
    console.log( 'started game' );
  }

  pauseGame(): void {
    this.store.dispatch( pauseGame() );
    console.log( 'paused game' );
  }

  continueGame(): void {
    this.store.dispatch( continueGame() );
    console.log( 'continue game' );
  }

  endGame(): void {
    this.store.dispatch( endGame() );
    console.log( 'end game' );
  }
}
