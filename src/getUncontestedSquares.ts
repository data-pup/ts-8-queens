import { ChessBoard, Position } from "./ChessBoard";

const getRange = (min:number, max:number) : number[] => {
    return new Array(max - min).map((_, i) => min + i);
}

const getBoolArray = (board:ChessBoard) : boolean[][] => {
    const {height, width} = board;
    return new Array<boolean[]>(height)
        .map((_, i) =>
            new Array<boolean>(width).fill(true),
        );
}

export const getUncontestedSquares = (board:ChessBoard) : Position[] => {
    const {pieces, height, width} = board;
    const [xDomain, yDomain] = [getRange(0, width), getRange(0, height)];
    const possibleSquares = getBoolArray(board);

    pieces.forEach((currPiece) => {
        const [pieceX, pieceY] = currPiece.position;
        xDomain.forEach((x) => possibleSquares[pieceY][x] = false)
        yDomain.forEach((y) => possibleSquares[y][pieceX] = false)
    });

    throw new Error('');
}
