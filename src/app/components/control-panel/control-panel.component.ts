import { AppState } from './../../store/app-state/interfaces/app-state';
import { GameState } from '../../store/feature-game-state/enums/game-states';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getGameState$ } from 'src/app/store/feature-game-state/selectors/feature-game.selectors';
import { startGame, pauseGame, continueGame, endGame } from 'src/app/store/feature-game-state/actions/feature-game-state.actions';

@Component({
  selector: 'app-sb-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit {
  gameState$: Observable<GameState>;

  GameState = GameState;

  constructor (private store: Store<AppState>) { }

  ngOnInit () {
    this.gameState$ = this.store.pipe(select(getGameState$));
  }

  startGame (): void {
    this.store.dispatch(startGame());
  }

  pauseGame (): void {
    this.store.dispatch(pauseGame());
  }

  continueGame (): void {
    this.store.dispatch(continueGame());
  }

  endGame (): void {
    this.store.dispatch(endGame());
  }

}
