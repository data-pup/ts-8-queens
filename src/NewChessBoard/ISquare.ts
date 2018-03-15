export interface ISquare {
    readonly x:number;
    readonly y:number;

    readonly up:ISquare;
    readonly down:ISquare;
    readonly left:ISquare;
    readonly right:ISquare;
    readonly upLeft:ISquare;
    readonly upRight:ISquare;
    readonly downLeft:ISquare;
    readonly downRight:ISquare;
}
