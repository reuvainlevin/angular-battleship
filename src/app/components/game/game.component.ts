import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { prepareBoard } from 'src/app/store/actions/feature-game-state.actions';
import { getFeatureBoard$ } from 'src/app/store/selectors/feature-board.selectors';

@Component( {
  selector: 'app-sb-game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class GameComponent implements OnInit {

  constructor ( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.dispatch( prepareBoard() );

    // this.store.pipe( select( getFeatureBoard$ ) ).subscribe( b => {
    //   console.log( 'this is my board from store: ', b );
    // } );
  }
}
