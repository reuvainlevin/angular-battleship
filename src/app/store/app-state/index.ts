import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { featureGameStateReducer } from '../feature-game-state/reducers/feature-game.reducers';
import { featureBoardReducer } from '../feature-board/reducers/feature-board.reducers';
import { featureBoardSpecsReducer } from '../feature-board-specs/reducers/feature-board-specs.reducers';
import { AppState } from './interfaces/app-state';



export const reducers: ActionReducerMap<AppState> = {
  featureGameStatus: featureGameStateReducer,
  featureBoardSpecs: featureBoardSpecsReducer,
  featureBoard: featureBoardReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
