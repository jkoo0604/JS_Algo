/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:
Input: matrix = [["0","1"],["1","0"]]
Output: 1

Example 3:
Input: matrix = [["0"]]
Output: 0
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let max = 0;
    let m = matrix.length;
    let n = matrix[0].length;
    
    const checkSquare = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        if (matrix[i][j] === '0') return;
        
        let size = 1;
        while (i + size < m && j + size < n) {
            let checked = true;
            for (let p = i; p <= i + size; p++) {
                if (matrix[p][j + size] === '0') {
                    checked = false;
                    break;
                };
                if (checked && p === i + size) {
                    for (let q = j; q <= j + size; q++) {
                        if (matrix[p][q] === '0') {
                            checked = false;
                            break;
                        };
                    }
                }
                if (!checked) break;
            }
            if (checked) {
                size++;
            } else {
                break;
            }
        }
        max = Math.max(max, size);
        return;
    }
    
    for (let i = 0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if (matrix[i][j] === '0') continue;
            checkSquare(i, j);
        }
    }
    return Math.pow(max,2);
    
};