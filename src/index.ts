import { ChessBoard } from './ChessBoard/ChessBoard';
import {
    getChessBoardStringWithContestedSquares,
} from './PrintChessBoard/getChessBoardStringWithContestedSquares';

export const main = () : void => {
    const board = new ChessBoard(
        [
            {name:'Q', position:[0, 0]},
            {name:'Q', position:[0, 1]},
        ],
        3,
        3,
    );
    const boardString = getChessBoardStringWithContestedSquares(board);
    process.stdout.write(`${boardString}`);
};

main();
