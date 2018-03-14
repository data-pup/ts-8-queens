import { ChessBoard, Position, Queen } from './ChessBoard';

const getRange = (min:number, max:number) : number[] => {
    return new Array(max - min).map((_, i) => min + i);
};

const verticalMoves = (q:Queen, board:ChessBoard) : Position[] => {
    const x = q.position[0];
    return getRange(0, board.height).map((y) => [x, y] as Position);
};

const horizontalMoves = (q:Queen, board:ChessBoard) : Position[] => {
    const y = q.position[1];
    return getRange(0, board.width).map((x) => [x, y] as Position);
};

const diagonalMoves = (q:Queen, board:ChessBoard) : Position[] => {
    const {height, width} = board;
    const [x, y] = q.position;
    const moves = new Array<Position>(...[q.position]);
    let distance = 1;
    while (true) {
        const newPositions:Position[] = [
            [x + distance, y + distance] as Position,
            [x + distance, y - distance] as Position,
            [x - distance, y + distance] as Position,
            [x - distance, y - distance] as Position,
        ].filter(([newX, newY]) => // Check that positions are in bounds.
            newX >= 0 && newX < width && newY >= 0 && newY < height);
        if (newPositions.length === 0) { break; }
        moves.push(...newPositions);
        distance++;
    }
    return moves;
};

export const getQueenMovementOptions = (q:Queen, board:ChessBoard) : Position[] => {
    return [
        ...verticalMoves(q, board),
        ...horizontalMoves(q, board),
        ...diagonalMoves(q, board),
    ];
};
