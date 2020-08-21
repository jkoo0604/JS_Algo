// given a string, return the length of the longest substring with all distinct characters

function findLongestSubstring(str){
    if (str.length === 0) return 0;
    var start = 0;
    var end = 0;
    var charIdx = {};
    var maxLen = -Infinity;
    var maxStr = '';
    while (end < str.length) {
        let char = str[end];
        if (charIdx.hasOwnProperty(char) && charIdx[char] >= start) {
            start = charIdx[char] + 1;
        }
        charIdx[char] = end;
        if (end-start+1 > maxLen) {
            maxStr = str.substring(start, end+1);
        }
        maxLen = Math.max(maxLen, end-start+1);
        // console.log(str.substring(start, end+1));
        end++;
    }
    return maxLen;
  }

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6


console.log('*'.repeat(40));
// given array of positive int and positive int, return min length of contiguous subarray of which the sum is greater than or equal to the testInt. if there isn't one, return 0
function minSubArrayLen(arr, testInt) {
    var start = 0;
    var end = 0;
    var sum = arr[start];
    var minLen = Infinity;
    while (start <= arr.length-1) {
        if (sum < testInt && end+1 <= arr.length-1) {
            end++;
            sum += arr[end];
        } else if (sum < testInt && end+1 >= arr.length) {
            break;
        } else {
            minLen = Math.min(minLen, end-start+1);
            sum -= arr[start];
            start++;
        }
    }
    
    return minLen === Infinity ? 0 : minLen ; 
}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) //2 ([4,3])
console.log(minSubArrayLen([2,1,6,5,4],9)) //2 ([5,4])
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) //1 ([62])
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

console.log('*'.repeat(40));
// given array of int and a num, find the maximum sum of subarray with the length of the number. subarray must consist of consecutive elements frmo the original array (e.g. [100, 300] is not a subarray in the first example)
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    var maxSum = 0;
    var tempSum = 0;
    for (let i=0; i<num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i=num; i<arr.length; i++) {
        // remove the first value and add the new one (all other values will be repeated in the new window)
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
    
    
  }

console.log(maxSubarraySum([100,200,300,400],2)) //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)) //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) //5
console.log(maxSubarraySum([2,3],3)) //null