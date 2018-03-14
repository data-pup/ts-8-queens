import { ChessBoard } from './ChessBoard';
import { getChessBoardString } from './ChessBoardToString';

export const main = () : void => {
    const board = new ChessBoard(
        [
            {name:'Q', position:[0, 0]},
            {name:'Q', position:[0, 1]},
        ],
        3,
        3,
    );
    const boardString = getChessBoardString(board);
    process.stdout.write(`${boardString}`);
};

main();
