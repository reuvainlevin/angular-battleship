import { createAction, props } from '@ngrx/store';
import { ISquare } from '../interfaces/square';


export enum BombingActionTypes {
    Bomb = '[Bombing] Bomb',
    ClearBomb = '[Bombing] Clear Bomb'
}

export const bomb = createAction(
    BombingActionTypes.Bomb,
    props<{ id: string }>()
);

export const clearBomb = createAction(
    BombingActionTypes.ClearBomb,
    props<{ id: string }>()
);




