/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    let spiral = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let seen = Array(m).fill().map(() => Array(n).fill(false));
    let row, col, directionIdx, rowMove, colMove;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    row = col = directionIdx = 0;
    
    while (spiral.length < m * n) {
        spiral.push(matrix[row][col]);
        seen[row][col] = true;
        [rowMove, colMove] = directions[directionIdx];
        if ((row + rowMove >= 0 && row + rowMove < m) && (col + colMove >= 0 && col + colMove < n) && !seen[row + rowMove][col + colMove]) {
            row += rowMove;
            col += colMove;
        } else {
            directionIdx = (directionIdx + 1) % 4;
            [rowMove, colMove] = directions[directionIdx];
            row += rowMove;
            col += colMove;
        }
    }
    
    
    return spiral;
};