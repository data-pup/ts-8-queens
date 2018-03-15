export interface ISquare {
    up:ISquare;
    down:ISquare;
    left:ISquare;
    right:ISquare;
    upLeft:ISquare;
    upRight:ISquare;
    downLeft:ISquare;
    downRight:ISquare;

    isContestedFlag:boolean;
}
