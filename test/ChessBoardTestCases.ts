import { ChessBoard, Queen } from '../src/ChessBoard';

export type ChessBoardTestCase = {
    height:number;
    width:number;
    pieces:Queen[];
    testDesc:string;
    expectedError?:string;
};

export class ChessBoardTestCases {

    public static readonly validTests:ChessBoardTestCase[] = [
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

    public static readonly invalidDimensionsTests:ChessBoardTestCase[] = [
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

    public static readonly invalidPositionsTests:ChessBoardTestCase[] = [
        {
            height:8, width:8,
            pieces:[
                {name:'Q', position:[0, 0]},
                {name:'Q', position:[0, 0]},
            ],
            expectedError:ChessBoard.invalidPositionError,
            testDesc:'Two pieces cannot occupy the same space.',
        },
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

}