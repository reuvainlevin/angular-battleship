import { AppState } from './../../store/app-state/interfaces/app-state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { prepareBoard } from 'src/app/store/feature-game-state/actions/feature-game-state.actions';

@Component({
  selector: 'app-sb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  constructor (private store: Store<AppState>) { }

  ngOnInit () {
    this.store.dispatch(prepareBoard());
  }
}
