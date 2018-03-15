import { IPiece } from './IPiece';
import { ISquare } from '../Square/ISquare';

export class Queen implements IPiece {
    public readonly square:ISquare;
    public toString() : string { return 'Q'; }
    public getMoves() : ISquare[] {
        throw new Error('');
    }
}
