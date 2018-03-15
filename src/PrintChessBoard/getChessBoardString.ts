import {
    getHorizontalBorder,
    getRowString,
    getSquareCharMatrix,
    setChars,
} from './stringHelpers';
import { IChessBoard } from '../ChessBoard/ChessBoard';

export const getChessBoardString = (board:IChessBoard) : string => {
    const horizontalBorder = getHorizontalBorder(board.width);
    const squareChars = getSquareCharMatrix(board);
    const piecePositions = board.pieces.map((p) => p.position);
    setChars(squareChars, piecePositions, 'Q');
    return squareChars
        .map((rowChars:string[]) : string =>
            [horizontalBorder, getRowString(rowChars)].join(''))
        .concat(horizontalBorder)
        .join('');
};
