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

        const positionsAreUnique = pieces // Check each position is unique.
            .map((q:Queen) : Position => q.position)
            .every((currPos:Position, i:number, arr:Position[]) : boolean =>
                arr.filter( // Check that only one item in the position list matches.
                    (evalPos:Position) : boolean =>
                        currPos[0] === evalPos[0] && currPos[1] === evalPos[1],
                ).length === 1, // If more than 1 position matched, there are duplicates.
            );

        if (!positionsAreUnique) { throw new Error(this.invalidPositionError); }
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
