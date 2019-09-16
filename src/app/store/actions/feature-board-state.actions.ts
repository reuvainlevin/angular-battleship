import { IFeatureBoard } from '../interfaces/feature-board';
import { Action, createAction, props } from '@ngrx/store';
import { Board } from 'src/app/models/board';

export enum FeatureBoardActionTypes {
    SetBoard = '[Feature Board] Set board'
}


export const setBoard = createAction( FeatureBoardActionTypes.SetBoard, props<{ board: IFeatureBoard }>() );


