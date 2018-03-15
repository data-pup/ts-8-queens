// import { assert } from 'chai';
// import { suite, test } from 'mocha-typescript';
// import { ChessBoard, Position } from '../src/ChessBoard/ChessBoard';
// import { getQueenMovementOptions } from '../src/MovementLogic/getQueenMovementOptions';

// type movementTestCase = {
//     board:ChessBoard;
//     expectedOptions:Position[];
//     testDesc:string;
// }

// /* tslint:disable-next-line:no-unused-variable */
// @suite class TestGetQueenMovementOptions {

//     private static readonly testCases:movementTestCase[] = [
//         {
//             board:new ChessBoard([{name:'Q', position:[0, 0]}], 3, 3),
//             expectedOptions:[
//                 [0, 0],
//                 [0, 1], [0, 2], // Vertical Options
//                 [1, 0], [2, 0], // Horizontal Options
//                 [1, 1], [2, 2], // Diagonal Options
//             ],
//             testDesc:'Basic 3x3 test.'
//         },
//     ];

//     private static comparePositionOptions(actualOptions:Position[], expectedOptions:Position[]) {
//     }

//     private static runTests(currTest:movementTestCase) {
//         const {board, expectedOptions, testDesc} = currTest;
//     }

//     @test public runTests() {
//         assert.equal(1, 2, 'Not Implemented!');
//     }

// }
