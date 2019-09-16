import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../interfaces/app-state';
import { featureGameStateReducer } from './feature-game.reducers';
import { featureBoardReducer } from './feature-board.reducers';
import { featureBoardSpecsReducer } from './feature-board-specs.reducers';



export const reducers: ActionReducerMap<AppState> = {
  featureGameStatus: featureGameStateReducer,
  featureBoardSpecs: featureBoardSpecsReducer,
  featureBoard: featureBoardReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
