import { ChessBoard } from './ChessBoard';
import { getChessBoardString } from './PrintChessBoard/getChessBoardString';

export const main = () : void => {
    const board = new ChessBoard(
        [
            {name:'Q', position:[0, 0]},
            {name:'Q', position:[0, 1]},
            {name:'Q', position:[2, 2]},
        ],
        3,
        3,
    );
    const boardString = getChessBoardString(board);
    process.stdout.write(`${boardString}`);
};

main();
