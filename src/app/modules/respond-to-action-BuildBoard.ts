import { getBoard } from 'src/app/modules/get-board';
import { IFeatureBoard } from '../store/interfaces/feature-board';
import { IFeatureBoardSpecs } from '../store/interfaces/feature-board-specs';

export function respondToAction_BuildBoard( specs: IFeatureBoardSpecs ): IFeatureBoard {
    return { squares: getBoard( specs.rows, specs.cols ) };
}
