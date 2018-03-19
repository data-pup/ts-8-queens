import { IPiece } from './Pieces/IPiece';
import { ISquare } from './Square/ISquare';

export interface IChessBoard {
    readonly origin:ISquare;
    readonly pieces:IPiece[];
    readonly height:number;
    readonly width:number;
    positionInBounds(x:number, y:number) : boolean;
    // updateBoard() : void; // Not sure if needed yet.
}