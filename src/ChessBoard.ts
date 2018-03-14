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
        this.validateDimensions();
        this.validatePositions();
    }

    public positionInBounds([x, y]:Position) : boolean {
        return (x >= 0 && y >= 0 && x < this.width && y < this.height);
    }

    private validateDimensions() : void {
        if (this.height <= 0 || this.width <= 0) {
            throw new Error(ChessBoard.invalidParamsError);
        }
    }

    // Iterate through the positions for the list of pieces, and check that each
    // piece is in bounds, and that no two pieces share the same position.
    private validatePositions() : void {
        this.pieces.forEach(({position}:Queen, i:number) => {
            if (!this.positionInBounds(position)
            ||  !this.noOtherPiecesAtPosition(position, i + 1)) {
                throw new Error(ChessBoard.invalidPositionError);
            }
        });
    }

    private noOtherPiecesAtPosition(checkPos:Position, startIndex:number=0) : boolean {
        const [x, y] = checkPos;
        for (let index = startIndex; index < this.pieces.length; index++) {
            const [currX, currY] = this.pieces[index].position;
            if (x === currX && y === currY) { return false; }
        }
        return true;
    }
}
