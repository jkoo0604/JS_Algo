/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};
    let freqArr = [];
    let res = [];
    
    for (let i=0; i<nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }
    
    for (let [key, val] of Object.entries(freq)) {
        if (freqArr[val] === undefined) {
            freqArr[val] = new Set().add(key);
        } else {
            freqArr[val] = freqArr[val].add(key);
        }
    }
    
    for (let j=freqArr.length - 1; j >= 0; j--) {
        if (freqArr[j]) {
            res.push(...freqArr[j]);
        }
        if (res.length === k) break;
    }
    
    return res;
    
    
};