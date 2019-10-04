import { IFeatureBoard } from '../interfaces/feature-board';
import { createAction, props } from '@ngrx/store';
import { ISquare } from '../interfaces/square';

export enum FeatureBoardActionTypes {
    SetBoard = '[Feature Board] Set board',
    Click = '[Feature Board] Click',
    Hit = '[Feature Board] Hit',
    Blank = '[Feature Board] Blank'
}


export const setBoard = createAction(
    FeatureBoardActionTypes.SetBoard,
    props<{ board: IFeatureBoard }>()
);

export const click = createAction(
    FeatureBoardActionTypes.Click,
    props<{ square: ISquare }>()
);

export const hit = createAction(
    FeatureBoardActionTypes.Hit,
    props<{ square: ISquare }>()
);

export const blank = createAction(
    FeatureBoardActionTypes.Blank
);


