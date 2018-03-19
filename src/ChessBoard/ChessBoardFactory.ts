import { Square } from './Square/Square';

// Build a chessboard, return a reference to the origin square.
export const buildBoard = (height:number, width:number) : Square => {
    const rows:Square[][] = [...new Array(height)].fill(buildRow(width));
    linkSquares(rows);
    return rows[0][0];
};

// This function is used to build a row. This will initialize the left/right pointers.
const buildRow = (rowWidth:number) : Square[] => {
    const row:Square[] = new Array(rowWidth);
    if (rowWidth === 1) { return row; }
    for (let i = 0; i < row.length - 1; i++) {
        const [curr, next] = [row[i], row[i+1]];
        curr.right = next;
        next.left = curr;
    }
    return row;
};

// This function will link all of the squares together.
const linkSquares = (rows:Square[][]) : void => {
    for (let i = 0; i < rows.length - 1; i++) {
        const [top, bottom] = [rows[i], rows[i+1]]
        addVerticalLinks(top, bottom);
    }

    for (const currRow of rows) {
        for (const currSquare of currRow) {
            addDiagLinks(currSquare);
        }
    }
};

// This function links two rows together, setting each square's up/down pointers.
const addVerticalLinks = (upperRow:Square[], lowerRow:Square[]) : void => {
    if (upperRow.length === lowerRow.length) {
        const rowLength = upperRow.length;
        for (let i = 0; i < rowLength; i++) {
            const [currUpper, currLower] = [upperRow[i], lowerRow[i]];
            currUpper.down = currLower;
            currLower.up = currUpper;
        }
    } else {
        throw new Error('Could not add links to rows with different lengths.');
    }
};

// This function is called after the vertical links (up/down) to the rows.
const addDiagLinks = (s:Square) : void => {
    if (s.up !== null) {
        if (s.up.left !== null) {
            s.upLeft = s.up.left;
            s.up.left.downRight = s;
        }
        if (s.up.right !== null) {
            s.upRight = s.up.right;
            s.up.right.downLeft = s;
        }
    }
    if (s.down !== null) {
        if (s.down.left !== null) {
            s.downLeft = s.down.left;
            s.down.left.upRight = s;
        }
        if (s.down.right !== null) {
            s.downRight = s.down.right;
            s.down.right.upLeft = s;
        }
    }
}
