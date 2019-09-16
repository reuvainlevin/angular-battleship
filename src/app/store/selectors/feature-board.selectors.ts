import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { IFeatureBoard } from '../interfaces/feature-board';


export const getFeatureBoard$ = createFeatureSelector<AppState, IFeatureBoard>( 'featureBoard' );




