import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { getGameStarted$, getGamePaused$, getGameEnded$ } from 'src/app/store/selectors/feature-game.selectors';
import { startGame, pauseGame, continueGame, endGame, prepareBoard } from 'src/app/store/actions/feature-game-state.actions';
import { getFeatureBoard$ } from 'src/app/store/selectors/feature-board.selectors';

@Component({
  selector: 'app-sb-game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  isStarted$: Observable<boolean>;
  isPaused$: Observable<boolean>;
  isEnded$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isStarted$ = this.store.pipe( select( getGameStarted$ ) );
    this.isPaused$ = this.store.pipe( select( getGamePaused$ ) );
    this.isEnded$ = this.store.pipe( select( getGameEnded$ ) );


    this.store.pipe( select( getFeatureBoard$ ) ).subscribe( b => {
      console.log( 'this is my board from store: ', b );
    } );

    this.store.dispatch( prepareBoard() );

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
