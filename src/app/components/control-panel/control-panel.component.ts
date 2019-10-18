import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getGameStarted$, getGamePaused$, getGameEnded$ } from 'src/app/store/selectors/feature-game.selectors';
import { AppState } from 'src/app/store/interfaces/app-state';
import { startGame, pauseGame, continueGame, endGame } from 'src/app/store/actions/feature-game-state.actions';

@Component({
  selector: 'app-sb-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [ './control-panel.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit {
  isStarted$: Observable<boolean>;
  isPaused$: Observable<boolean>;
  isEnded$: Observable<boolean>;

  constructor ( private store: Store<AppState>) { }

  ngOnInit() {
    this.isStarted$ = this.store.pipe( select( getGameStarted$ ) );
    this.isPaused$ = this.store.pipe( select( getGamePaused$ ) );
    this.isEnded$ = this.store.pipe( select( getGameEnded$ ) );
  }

  startGame(): void {
    this.store.dispatch( startGame() );
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
