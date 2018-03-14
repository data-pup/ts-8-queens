export type Position = [number, number];
export type Queen = {
    name:'Q';
    position:Position;
};

export class ChessBoard {

    public static readonly invalidParamsError = 'Invalid constructor parameters!';
    public static readonly invalidPositionError = 'Invalid position exists!';

    public readonly pieces:Queen[];
    public readonly height:number;
    public readonly width:number;

    constructor(pieces:Queen[]=[], height:number=8, width:number=8) {
        this.pieces = new Array(...pieces);
        this.height = height;
        this.width = width;
        this.validateDimensions(height, width);
        this.validatePositions(pieces, height, width);
    }

    public positionInBounds([x, y]:Position) : boolean {
        return (x > 0 && y > 0 && x < this.width && y < this.height);
    }

    private validateDimensions(height:number, width:number) : void {
        if (this.height <= 0 || this.width <= 0) {
            throw new Error(ChessBoard.invalidParamsError);
        }
    }

    private validatePositions(pieces:Queen[], height:number, width:number) : void {
        pieces.map((q:Queen) : Position => q.position) // Iterate through each position.
            .forEach(([x, y]:Position, i:number, arr:Position[]) => {
                if (x < 0 || y < 0 || x >= width || y >= height) {
                    throw new Error(ChessBoard.invalidPositionError);
                } // Check that only one piece is at the current position.
                const onePieceAtCurrPos:boolean = arr
                    .filter(([a, b]:Position) : boolean => x === a && y === b)
                    .length === 1; // Throw an exception if two or more pieces share a position.
                if (!onePieceAtCurrPos) { throw new Error(ChessBoard.invalidPositionError); }
            },
        );
    }
}
