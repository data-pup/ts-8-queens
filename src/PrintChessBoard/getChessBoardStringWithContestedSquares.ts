import {
    getHorizontalBorder,
    getRowString,
    getSquareCharMatrix,
    setChars,
} from './stringHelpers';
import { IChessBoard } from '../ChessBoard/ChessBoard';
import { getUncontestedSquares } from '../MovementLogic/getUncontestedSquares';

export const getChessBoardStringWithContestedSquares = (board:IChessBoard) => {
    const horizontalBorder = getHorizontalBorder(board.width);
    const squareChars = getSquareCharMatrix(board, 'x');
    const piecePositions = board.pieces.map((p) => p.position);
    setChars(squareChars, piecePositions, 'Q');
    const uncontestedPositions = getUncontestedSquares(board);
    setChars(squareChars, uncontestedPositions, ' ');
    return squareChars
        .map((rowChars:string[]) : string =>
            [horizontalBorder, getRowString(rowChars)].join(''))
        .concat(horizontalBorder)
        .join('');
};
