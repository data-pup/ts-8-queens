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
        this.up = null;
        this.down = null;
        this.left = null;
        this.right = null;
        this.upLeft = null;
        this.upRight = null;
        this.downLeft = null;
        this.downRight = null;
    }
}
