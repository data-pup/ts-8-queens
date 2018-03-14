import { ChessBoard, Position } from './ChessBoard';
import { getQueenMovementOptions } from './getQueenMovementOptions';

const getBoolArray = (board:ChessBoard) : boolean[][] => {
    const {height, width} = board;
    return new Array<boolean[]>(height)
        .map((_, i) =>
            new Array<boolean>(width).fill(true),
        );
};

export const getUncontestedSquares = (board:ChessBoard) : Position[] => {
    const uncontestedFlags = getBoolArray(board);
    const uncontestedPositions = new Array<Position>();

    board.pieces
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
