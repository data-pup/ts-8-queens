import {
    getHorizontalBorder,
    getRowString,
    getSquareCharMatrix,
    setPieceChars,
} from './stringHelpers';
import { IChessBoard } from '../ChessBoard';

export const getChessBoardString = (board:IChessBoard) : string => {
    const horizontalBorder = getHorizontalBorder(board.width);
    const squareChars = getSquareCharMatrix(board);
    setPieceChars(squareChars, board.pieces);
    return squareChars
        .map((rowChars:string[]) : string =>
            [horizontalBorder, getRowString(rowChars)].join(''))
        .concat(horizontalBorder)
        .join('');
};