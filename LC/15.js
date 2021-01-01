/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) =>  a - b);
    let answer = [];

    
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] > 0) return answer;
        let left = i+1;
        let right = nums.length -1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                answer.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left+1]) left++;
                while (nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        while (nums[i] === nums[i+1]) i++;
    }
    
    return answer;
};