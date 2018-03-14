import { Queen } from './Queen';
import { Position } from './Position';

export interface IChessBoard {
    readonly pieces:Queen[];
    readonly height:number;
    readonly width:number;
    positionInBounds([x, y]:Position) : boolean;
}
