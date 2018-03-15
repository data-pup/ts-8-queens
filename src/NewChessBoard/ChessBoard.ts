import { IChessBoard } from './IChessBoard';
import { IPiece } from './IPiece';
import { ISquare } from './ISquare';

export class ChessBoard implements IChessBoard {

    private static validateDimensions(height:number, width:number) {
        if (height <= 0 || width <= 0) {
            throw new Error(this.invalidParamsError);
        }
    }

    public static readonly invalidParamsError = 'Invalid constructor parameters!';

    private readonly bottomLeft:ISquare;
    private readonly bottomRight:ISquare;
    private readonly topLeft:ISquare;
    private readonly topRight:ISquare;

    public readonly pieces:IPiece[];
    public readonly height:number;
    public readonly width:number;

    constructor(height:number=8, width:number=8) {
        ChessBoard.validateDimensions(height, width);
        this.bottomLeft = undefined;
        this.bottomRight = undefined;
        this.topLeft = undefined;
        this.topRight = undefined;
    }

    public positionInBounds(x:number, y:number) : boolean {
        throw new Error('');
    }
}
