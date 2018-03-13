import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { assertPieceCollectionsAreSame } from './assertPieceCollectionsAreSame';
import { ChessBoardTestCase, ChessBoardTestCases } from './ChessBoardTestCases';
import { ChessBoard } from '../src/ChessBoard';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestChessBoard {

    private static checkValidTestPasses(testCase:ChessBoardTestCase) {
        const {height, width, pieces, testDesc} = testCase;
        const board = new ChessBoard(pieces, height, width);
        assert.equal(board.height, height);
        assert.equal(board.width, width);
        assertPieceCollectionsAreSame(board.pieces, pieces, testDesc);
    }

    private static checkInvalidTestThrowsException(testCase:ChessBoardTestCase) {
        const {height, width, pieces, expectedError} = testCase;
        assert.throws( /* tslint:disable-next-line:no-unused-variable */
            () => { const invalidBoard = new ChessBoard(pieces, height, width); },
            expectedError,
        );
    }

    @test public runTests() {
        ChessBoardTestCases.validTests.forEach((currTest) => TestChessBoard.checkValidTestPasses(currTest));
        [...ChessBoardTestCases.invalidDimensionsTests, ...ChessBoardTestCases.invalidPositionsTests]
            .forEach((currTest) => TestChessBoard.checkInvalidTestThrowsException(currTest),
        );
    }

}
