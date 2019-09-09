import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../interfaces/app-state';
import { featureGameStateReducer } from './feature-game-state.reducers';



export const reducers: ActionReducerMap<AppState> = {
  featureGameState: featureGameStateReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
