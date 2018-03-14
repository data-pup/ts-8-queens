import { IChessBoard, Queen } from '../ChessBoard';

export const getSquareCharMatrix = (board:IChessBoard) : string[][] => {
    const {height, width} = board;
    const squareChars = new Array(height);
    for (let i = 0; i < height; i++) {
        squareChars[i] = new Array(width).fill(' ');
    }
    return squareChars;
};

export const setPieceChars = (squareChars:string[][], pieces:Queen[]) => {
    for (const p of pieces) {
        const [x, y] = p.position;
        squareChars[y][x] = p.name;
    }
};

export const getHorizontalBorder = (width:number) : string => {
    const visualWidth = (2 * width) + 1;
    return new Array(visualWidth).fill('-')
        .concat('\n')
        .join('');
};

export const getRowString = (rowChars:string[]) : string => {
    return ['', ...rowChars, '\n'].join('|');
};
