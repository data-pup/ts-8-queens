import { assert } from 'chai';
import { Queen } from '../src/ChessBoard';

export const assertPieceCollectionsAreSame = (pieces:Queen[], expected:Queen[], message:string) : void => {
    assert.equal(pieces.length, expected.length, message);
    pieces.forEach((currPiece:Queen, i:number) : void => {
        const currExpected = expected[i];
        const [actualX, actualY, expectedX, expectedY] = [...currPiece.position, ...currExpected.position];
        assert.equal(actualX, expectedX, message);
        assert.equal(actualY, expectedY, message);
    });
};
