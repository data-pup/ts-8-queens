import { ChessBoard, Queen,
    // Position,
    // Queen
} from './ChessBoard';

export const getChessBoardString = (board:ChessBoard) : string => {
    const squareChars = getSquareCharMatrix(board);
    setPieceChars(squareChars, board.pieces);
    const horizontalBorder = getHorizontalBorder(board.width);
    return squareChars
        .map((rowChars:string[]) : string =>
            [horizontalBorder, getRowString(rowChars)].join('\n'))
        .concat(...[horizontalBorder, ''])
        .join('\n');
};

const getSquareCharMatrix = (board:ChessBoard) : string[][] => {
    const {height, width} = board;
    const squareChars = new Array(height);
    for (let i = 0; i < height; i++) {
        squareChars[i] = new Array(width).fill(' ');
    }
    return squareChars;
};

const setPieceChars = (squareChars:string[][], pieces:Queen[]) => {
    for (const p of pieces) {
        const [x, y] = p.position;
        squareChars[y][x] = p.name;
    }
};

const getHorizontalBorder = (width:number) : string => {
    const visualWidth = (2 * width) + 1;
    return new Array(visualWidth).fill('-').join('');
};

const getRowString = (rowChars:string[]) : string => {
    rowChars.unshift('');
    rowChars.push('');
    return rowChars.join('|');
};
