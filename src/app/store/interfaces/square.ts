import { IBoatPart } from './boat-part';

export interface ISquare {
    id: number;
    row: string;
    col: string;
    imagePath?: string;
    boatPart?: IBoatPart;
}

