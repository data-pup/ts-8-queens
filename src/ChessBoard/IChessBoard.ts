import { IPiece } from './Pieces/IPiece';

export interface IChessBoard {
    readonly pieces:IPiece[];
    readonly height:number;
    readonly width:number;
    positionInBounds(x:number, y:number) : boolean;
}