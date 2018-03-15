import { ISquare } from './ISquare';

export class Square implements ISquare {

    public up:ISquare;
    public down:ISquare;
    public left:ISquare;
    public right:ISquare;
    public upLeft:ISquare;
    public upRight:ISquare;
    public downLeft:ISquare;
    public downRight:ISquare;

    public isContestedFlag:boolean;

    constructor() {
        this.isContestedFlag = false;
    }
}
