import { buildBoard } from './ChessBoardFactory';
import { IChessBoard } from './IChessBoard';
import { IPiece } from './Pieces/IPiece';
import { ISquare } from './Square/ISquare';

export { IChessBoard, IPiece, ISquare };

export class ChessBoard implements IChessBoard {

    private static validateDimensions(height:number, width:number) {
        if (height <= 0 || width <= 0) {
            throw new Error(this.invalidParamsError);
        }
    }

    public static readonly invalidParamsError = 'Invalid constructor parameters!';

    public readonly origin:ISquare;
    public readonly pieces:IPiece[];
    public readonly height:number;
    public readonly width:number;

    constructor(height:number=8, width:number=8) {
        ChessBoard.validateDimensions(height, width);
        this.origin = buildBoard(height, width);
    }

    public positionInBounds(x:number, y:number) : boolean {
        throw new Error('');
    }
}
