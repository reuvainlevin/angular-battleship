import { IFeatureBoardSpecs } from '../store/feature-board-specs/interfaces/feature-board-specs';
import { IFeatureBoard } from '../store/feature-board/interfaces/feature-board';
import { getBoard } from './get-board';
import { fillBoard } from './fill-board';

export const respondToActionSetBoard = (specs: IFeatureBoardSpecs): IFeatureBoard => {
    const squares = getBoard(specs.rows, specs.cols);
    fillBoard({ squares }, specs);
    return {
        squares
    };
};

