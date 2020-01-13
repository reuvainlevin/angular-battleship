import { AppState } from './../../app-state/interfaces/app-state';
import { getRandomNumber } from './../../../modules/get-random-number';
import { click, hit, blank, setBoard, buildBoard, bomb, clearBomb } from './../actions/feature-board-state.actions';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { startGame, continueGame, pauseGame, endGame, prepareBoard } from '../../feature-game-state/actions/feature-game-state.actions';
import { getFeatureBoardSpecs$ } from '../../feature-board-specs/selectors/feature-board-specs.selectors';

@Injectable()
export class BoardEffects {


    // TODO
    // this should be ina reducer function, this should be reconstructed to not need an effect

    prepareBoard$ = createEffect(
        () => this.actions$.pipe(
            ofType(prepareBoard),
            switchMap(
                (t) => this.store.pipe(
                    select(getFeatureBoardSpecs$),
                    map(specs => buildBoard({ specs }))
                )
            )
        )
    );


    // TODO
    // this should be ina reducer function, this should be reconstructed to not need an effect

    startGame$ = createEffect(
        () => this.actions$.pipe(
            ofType(startGame),
            switchMap(
                () => this.store.pipe(
                    select(getFeatureBoardSpecs$),
                    map(specs => setBoard({ specs }))
                )
            )
        )
    );


    // TODO
    // this should be in a reducer function, we don't need an effect for this

    click$ = createEffect(
        () => this.actions$.pipe(
            ofType(click),
            map(a => ((a.square && a.square.boatPart)) ? hit({ square: a.square }) : blank())
        )
    );



    startBomb$ = createEffect(
        () => this.actions$.pipe(
            ofType(
                startGame,
                continueGame
            ),
            tap(t => this.startBombing())
        ),
        { dispatch: false }
    );

    pauseBomb$ = createEffect(
        () => this.actions$.pipe(
            ofType(
                pauseGame,
                endGame
            ),
            tap(t => clearInterval(this.shooter))
        ),
        { dispatch: false }
    );

    shooter: NodeJS.Timer;

    startBombing = (): void => {
        this.shooter = setInterval(() => this.bomb(), 1000);
    }

    bomb = (): void => {
        const randomRow = getRandomNumber(0, 6).toString();
        const randomCol = getRandomNumber(0, 6).toString();

        const id = randomRow + randomCol;

        this.store.dispatch(bomb({ id }));

        setTimeout(() => {
            this.store.dispatch(clearBomb({ id }));
        }, 300);
    }



    constructor (private actions$: Actions, private store: Store<AppState>) { }
}
