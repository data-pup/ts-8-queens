import { ISquare } from './ISquare';

export interface IPiece {
    readonly square:ISquare;
    toString() : string;
    getMoves() : ISquare[];
}
