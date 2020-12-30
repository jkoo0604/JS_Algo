/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    let answer = [];
    
    for (let i=1; i<left.length; i++) {
        left[i] = nums[i-1] * left[i-1];
    }
    
    for (let i=right.length-2; i>=0; i--) {
        right[i] = nums[i+1] * right[i+1];
    }
    
    for (let i=0; i<left.length; i++) {
        answer[i] = left[i] * right[i];
    }
    
    return answer;
};