export type ISquare = {
    readonly x:number;
    readonly y:number;

    up:ISquare;
    down:ISquare;
    left:ISquare;
    right:ISquare;
    upLeft:ISquare;
    upRight:ISquare;
    downLeft:ISquare;
    downRight:ISquare;
}
