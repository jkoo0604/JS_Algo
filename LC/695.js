/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let max = 0;
    
    const calcArea = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return 0;
        if (grid[i][j] === 0) return 0;
        
        grid[i][j] = 0;
        let area = 1;
        
        area += calcArea(i, j+1, area);
        area += calcArea(i, j-1, area);
        area += calcArea(i+1, j, area);
        area += calcArea(i-1, j, area);
        
        return area;
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 1) {
                let tempArea = calcArea(i, j);
                max = Math.max(max, tempArea);
            }
        }
    }
    
    return max;
};