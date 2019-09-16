import { IFeatureGameStatus } from './feature-game-status';
import { IFeatureBoard } from './feature-board';
import { IFeatureBoardSpecs } from './feature-board-specs';

export interface AppState {
    featureGameStatus: IFeatureGameStatus;
    featureBoardSpecs: IFeatureBoardSpecs;
    featureBoard: IFeatureBoard;
}
