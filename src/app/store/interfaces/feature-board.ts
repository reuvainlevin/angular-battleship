import { ISquare } from './square';

export interface IFeatureBoard {
    squares: { [ id: string ]: ISquare};
}
