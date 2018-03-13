
export type Position = [number, number];

export type Queen = {
    name:'Q';
    position:Position;
};

export class ChessBoard {

    private static validateDimensions(height:number, width:number) : void {
        if (height <= 0 || width <= 0) { throw new Error(this.invalidParamsError); }
    }

    private static validatePositions(pieces:Queen[], height:number, width:number) : void {
        pieces.forEach((p) => { // Check that each position is in bounds.
            const [x, y]:Position = p.position;
            if (x < 0 || y < 0 || x >= height || y >= height) {
                throw new Error(this.invalidPositionError);
            }
        });
    }

    public static readonly invalidParamsError = 'Invalid constructor parameters!';
    public static readonly invalidPositionError = 'Invalid position exists!';

    public readonly pieces:Queen[];
    public readonly height:number;
    public readonly width:number;

    constructor(pieces:Queen[]=[], height:number=8, width:number=8) {
        ChessBoard.validateDimensions(height, width);
        ChessBoard.validatePositions(pieces, height, width);
        this.pieces = new Array(...pieces);
        this.height = height;
        this.width = width;
    }
}
