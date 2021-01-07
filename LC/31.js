/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

Example 4:

Input: nums = [1]
Output: [1]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) return nums;
    
    let pivot = -1;
    
    for (let i=nums.length-1; i>0; i--) {
        if (nums[i-1] < nums[i]) {
            pivot = i - 1;
            break;
        }
    }
    
    if (pivot === -1) {
        nums.reverse();
        return;
    }
    
    for (let j=nums.length-1; j>pivot; j--) {
        if (nums[j] > nums[pivot]) {
            [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
            break;
        }
    }
    
    let left = pivot+1;
    let right = nums.length-1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    
    return;
};