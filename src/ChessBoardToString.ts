import { ChessBoard,
    // Position,
    // Queen
} from './ChessBoard';

export const getChessBoardString = (board:ChessBoard) : string => {
    const {pieces, height, width} = board;
    const squareChars:string[][] = new Array<string>(height)
        .map((_) => new Array(width).fill(' '));

    for (const p of pieces) {
        const [x, y] = p.position;
        squareChars[y][x] = p.name;
    }

    const visualWidth = (2*width) + 1;
    const horizontalBorder = new Array(visualWidth).fill('-');

    return squareChars.map(
        (rowChars:string[]) : string => {
            rowChars.unshift('|');
            rowChars.push('|');
            return [horizontalBorder, rowChars.join('|')].join('\n');
        }
    ).join('\n');
};
