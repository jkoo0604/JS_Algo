/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    const helper = arr => {
        // console.log(arr, arr.length);
        if (arr.length <= 1) return [arr];
        
        let permutations = [];

        for (let j=0; j<arr.length; j++) {
            let temp = arr.slice(0, j).concat(arr.slice(j+1));
            let subArr = helper(temp);
            
            for (let k=0; k<subArr.length; k++) {
                permutations.push(arr.slice(j, j+1).concat(subArr[k]));
            }
        }
        
        return permutations;
    }
    
    
    return helper(nums);
};