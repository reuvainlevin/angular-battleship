import { getBoard } from 'src/app/modules/get-board';
import { IFeatureBoard } from '../store/interfaces/feature-board';
import { IFeatureBoardSpecs } from '../store/feature-board-specs/interfaces/feature-board-specs';

export const respondToActionBuildBoard = ( specs: IFeatureBoardSpecs ): IFeatureBoard => {
    return { squares: getBoard( specs.rows, specs.cols ) };
};

