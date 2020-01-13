import { IBoat } from '../../interfaces/boat';

export interface IFeatureBoardSpecs {
    rows: number;
    cols: number;
    numOfBoats: number;
    boatSizes: number[];
    boats: IBoat[];
}
