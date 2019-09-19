import {startGame, pauseGame, endGame, continueGame} from './store/actions/feature-game-state.actions';
import { getGameStarted$, getGamePaused$, getGameEnded$ } from './store/selectors/feature-game.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/interfaces/app-state';
import { getFeatureBoard$ } from './store/selectors/feature-board.selectors';

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
  boatArray = [ 2, 3, 3, 4, 5 ];
  boatId = 1;
  boardSize = { // move to store
    width: 7,
    height: 7
  };
  
  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.isStarted$ = this.store.pipe( select( getGameStarted$ ) );
    this.isPaused$ = this.store.pipe( select( getGamePaused$ ) );
    this.isEnded$ = this.store.pipe( select( getGameEnded$ ) );

    // this.boatArray.forEach( boat => {
    //   placeBoat( this.board, boat, this.boatId++, this.boardSize.width, this.boardSize.height );
    // });
    // console.log( this.board );

    this.store.pipe( select( getFeatureBoard$ ) ).subscribe( b => {
      console.log( 'this is my board from store: ', b );
    } );

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
