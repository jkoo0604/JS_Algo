/*
A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it. If such an index does not exist, return -1.

You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the matrix is rows x cols.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary matrix directly.

Example 1:

Input: mat = [[0,0],[1,1]]
Output: 0

Example 2:

Input: mat = [[0,0],[0,1]]
Output: 1

Example 3:

Input: mat = [[0,0],[0,0]]
Output: -1

Example 4:

Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
*/

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [row, col] = binaryMatrix.dimensions();
    let colNum = -1;
    let currentCol, currentRow;
    
    for (let i=0; i<row; i++) {
        if (binaryMatrix.get(i, col-1) === 1) {
            colNum = col - 1;
            break;
        }
    }   
    
    if (colNum === -1) return -1;
    
    currentCol = colNum - 1;
    currentRow = 0;
    
    
    while (currentCol >= 0 && currentRow < row) {
        if (binaryMatrix.get(currentRow, currentCol) === 1) {
            colNum = currentCol;
            currentCol--;
        } else {
            currentRow++;
        }
    }
    
    return colNum;
    
};