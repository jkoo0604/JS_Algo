/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.
*/

function sudoku2(grid) {
    let len = 9;
    
    let rowStart, colStart;
    
    const checkSq = (row, col) => {
        if (row < 0 || row >= len || col < 0 || col >= len) {
            return true;
        }
        
        let rowStart = ((row - (row % 3)) / 3) * 3;
        let colStart = ((col - (col % 3)) / 3) * 3;
        let val = grid[row][col];
        for (let i=rowStart; i<rowStart + 3; i++) {
            for (let j=colStart; j<colStart + 3; j++) {
                if (grid[i][j] === val && i !== row && j !== col) {
                    console.log('small sq', rowStart, colStart, row, col, i, j)
                    return false;
                }
            }
        }
        
        for (let i=0; i<len; i++) {
            if (grid[i][col] === val && i !== row) {
                console.log('row check')
                return false;
            }
        }
        
        for (let j=0; j<len; j++) {
            if (grid[row][j] === val && j != col) {
                console.log('col check')
                return false;
            }
        }
        
        return true;
    }
    
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            if (grid[i][j] !== '.') {
                let check = checkSq(i, j);
                if (!check) return false;
            }
        }
    }
    
    return true;
}
