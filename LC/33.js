/*
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //     let n = nums.length;
    //     let afterPivot = false;
        
    //     if (n === 1 && nums[0] !== target) return -1;
    //     if (target < nums[0] && target > nums[n-1]) return -1;
        
    //     for (let i=0; i<n; i++) {
    //         if (nums[i] === target) return i;
    //         if (i > 0 && nums[i] < nums[i-1]) {
    //             afterPivot = true;
    //             if (target > nums[i-1]) return -1;
    //         }        
    //     }
        
    //     return -1;
        
    let start = 0, end = nums.length - 1, mid;
        
    while (start <= end) {
        mid = Math.floor((end + start) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] >= nums[start]) {
            // left side sorted
            if (target < nums[mid] && target >= nums[start]) end = mid - 1;
            else start = mid + 1;            
        } else {
            // right side sorted
            if (target > nums[mid] && target <= nums[end]) start = mid + 1;
            else end = mid - 1;
        }
    }

    return -1;
};
