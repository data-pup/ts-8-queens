import { ISquare } from '../Square/ISquare';

export interface IPiece {
    readonly square:ISquare;
    toString() : string;
    getMoves() : ISquare[];
}
