import { IFeatureGameStatus } from '../../feature-game-state/interfaces/feature-game-status';
import { IFeatureBoardSpecs } from '../../feature-board-specs/interfaces/feature-board-specs';
import { IFeatureBoard } from '../../feature-board/interfaces/feature-board';

export interface AppState {
    featureGameStatus: IFeatureGameStatus;
    featureBoardSpecs: IFeatureBoardSpecs;
    featureBoard: IFeatureBoard;
}
