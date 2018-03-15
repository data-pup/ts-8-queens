import { IChessBoard, Position } from '../ChessBoard/ChessBoard';
import { getQueenMovementOptions } from './getQueenMovementOptions';

export const getUncontestedSquares = (board:IChessBoard) : Position[] => {
    const uncontestedFlags = getBoolArray(board);
    const uncontestedPositions = new Array<Position>();

    board.pieces // Get each queen's movement choices, set flags to false.
        .map((p) => getQueenMovementOptions(p, board))
        .forEach((movementChoices:Position[]) => {
            movementChoices.forEach((contestedPosition:Position) => {
                const [x, y] = contestedPosition;
                uncontestedFlags[y][x] = false;
            });
        });

    uncontestedFlags.forEach((rowFlags, y) => {
        rowFlags.forEach((isUncontested, x) => {
            if (isUncontested) { uncontestedPositions.push([x, y]); }
        });
    });

    return uncontestedPositions;
};

const getBoolArray = (board:IChessBoard) : boolean[][] => {
    const {height, width} = board;
    const boolArray = Array<boolean[]>(height);
    for (let i = 0; i < height; i++) {
        boolArray[i] = new Array(width).fill(true);
    }
    return boolArray;
};
