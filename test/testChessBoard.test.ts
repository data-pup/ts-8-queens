import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { assertPieceCollectionsAreSame } from './assertPieceCollectionsAreSame';
import { ChessBoard, Queen } from '../src/ChessBoard';

type ChessBoardTestCase = {
    height:number;
    width:number;
    pieces:Queen[];
    testDesc:string;
    expectedError?:string;
};

/* tslint:disable-next-line:no-unused-variable */
@suite class TestChessBoard {

    private static readonly validTests:ChessBoardTestCase[] = [
        {
            height:8, width:8,
            pieces:[ {name:'Q', position:[0, 0]} ],
            testDesc:'Single piece at [0, 0].',
        },
        {
            height:8, width:8,
            pieces:[
                {name:'Q', position:[0, 0]},
                {name:'Q', position:[0, 7]},
                {name:'Q', position:[7, 0]},
                {name:'Q', position:[7, 7]},
            ],
            testDesc:'One queen at each corner.',
        },
    ];

    private static readonly invalidDimensionsTests:ChessBoardTestCase[] = [
        {
            height:0, width:0, pieces:[],
            expectedError:ChessBoard.invalidParamsError,
            testDesc:'Board cannot be of size 0x0.',
        },
        {
            height:-1, width:-1, pieces:[],
            expectedError:ChessBoard.invalidParamsError,
            testDesc:'Board dimensions cannot be negative.',
        },
    ];

    private static readonly invalidPositionsTests:ChessBoardTestCase[] = [
        {
            height:8, width:8,
            pieces:[ {name:'Q', position:[-1, 0]} ],
            expectedError:ChessBoard.invalidPositionError,
            testDesc:'Piece cannot be at negative coordinates.',
        },
        {
            height:8, width:8,
            pieces:[ {name:'Q', position:[8, 8]} ],
            expectedError:ChessBoard.invalidPositionError,
            testDesc:'Coordinates cannot equal dimensions.',
        },
    ];

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
        TestChessBoard.validTests.forEach((currTest) => TestChessBoard.checkValidTestPasses(currTest));
        [...TestChessBoard.invalidDimensionsTests, ...TestChessBoard.invalidPositionsTests].forEach(
            (currTest) => TestChessBoard.checkInvalidTestThrowsException(currTest),
        );
    }

}
