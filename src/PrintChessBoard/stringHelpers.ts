import { IChessBoard, Position } from '../ChessBoard/ChessBoard';

export const getSquareCharMatrix = (board:IChessBoard, defChar:string=' ') : string[][] => {
    const {height, width} = board;
    const squareChars = new Array(height);
    for (let i = 0; i < height; i++) {
        squareChars[i] = new Array(width).fill(defChar);
    }
    return squareChars;
};

export const setChars = (squareChars:string[][], positions:Position[], newChar:string) => {
    for (const p of positions) {
        const [x, y] = p;
        squareChars[y][x] = newChar;
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
