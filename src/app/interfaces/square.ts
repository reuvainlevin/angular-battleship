import { IBoatPart } from './boat-part';

export interface ISquare {
    id: number;
    row: number;
    col: number;
    imagePath?: string;
    boatPart?: IBoatPart;
}

