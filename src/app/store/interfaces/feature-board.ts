import { ISquare } from './square';
import { IFeatureBoardSpecs } from '../feature-board-specs/interfaces/feature-board-specs';

export interface IFeatureBoard  {
    squares: { [ id: string ]: ISquare };
    // fillBoard( board: IFeatureBoard, boardSpecs: IFeatureBoardSpecs ): void;
}
