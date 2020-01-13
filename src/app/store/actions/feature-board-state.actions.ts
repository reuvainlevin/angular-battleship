import { IFeatureBoard } from '../interfaces/feature-board';
import { createAction, props } from '@ngrx/store';
import { ISquare } from '../interfaces/square';
import { IFeatureBoardSpecs } from '../feature-board-specs/interfaces/feature-board-specs';

export enum FeatureBoardActionTypes {
    BuildBoard = '[Feature Board] Build board',
    SetBoard = '[Feature Board] Set board',
    Click = '[Feature Board] Click',
    Hit = '[Feature Board] Hit',
    Blank = '[Feature Board] Blank'
}

export const buildBoard = createAction(
    FeatureBoardActionTypes.BuildBoard,
    props<{ specs: IFeatureBoardSpecs }>()
);


export const setBoard = createAction(
    FeatureBoardActionTypes.SetBoard,
    props<{ specs: IFeatureBoardSpecs }>()
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


