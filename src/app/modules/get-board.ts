import { ISquare } from '../store/interfaces/square';

export const getBoard = (rows: number, cols: number): { [id: string]: ISquare } => {
    const squares = {};
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            squares[row.toString() + col.toString()] = {
                id: '' + row + col,
                row,
                col,
                imagePath: 'water',
                isBombed: false,
                bombImagePath: 'boom'
            };
        }
    }

    return squares;
};

