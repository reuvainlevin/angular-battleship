import { AppState } from './../../store/app-state/interfaces/app-state';
import { GameState } from '../../store/feature-game-state/enums/game-states';
import { getGameState$ } from 'src/app/store/feature-game-state/selectors/feature-game.selectors';
import { ISquare } from '../../store/feature-board/interfaces/square';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSquare$ } from 'src/app/store/feature-board/selectors/feature-board.selectors';
import * as images from '../../images/images-api';
import { filter, map } from 'rxjs/operators';
import { click } from 'src/app/store/feature-board/actions/feature-board-state.actions';

@Component({
  selector: 'app-sb-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  @Input() id: string;

  square$: Observable<ISquare>;
  image$: Observable<string>;
  gameState$: Observable<GameState>;

  GameState = GameState;

  constructor (private store: Store<AppState>) { }

  ngOnInit () {
    const tmpSquare$ = this.store.pipe(
      select(getSquare$, { id: this.id }),
      filter(sq => !!sq)
    );

    this.square$ = tmpSquare$;

    this.setImage(tmpSquare$);

    this.gameState$ = this.store.pipe(select(getGameState$));

  }

  setImage (tmpSquare$: Observable<ISquare>) {
    this.image$ = tmpSquare$.pipe(
      map(
        sq => {
          if (sq && sq.boatPart && sq.boatPart.isHit) {
            return images[sq.boatPart.boatImagePath];
          } else {
            if (sq && sq.isBombed) {
              return images[sq.bombImagePath];
            } else {
              return images[sq.imagePath];
            }
          }
        }
      )
    );
  }

  click (square: ISquare) {
    this.store.dispatch(click({ square }));
  }

}
