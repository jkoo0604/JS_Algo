// takes in two strings, checks whether the characters in first string form a subsequence of the characters in second. 
// check whether the characters in the first string appear somewhere in the second, without their order changing

function isSubsequence(str1, str2) {
    
    let i=0;
    for (let char of str2) {
        if (char === str1[i]) {
            i++;
            if (i >= str1.length) return true;
        }
    }
    return false;
  }

console.log(isSubsequence('hello','hello world')) //t
console.log(isSubsequence('sing','string')) //t
console.log(isSubsequence('abc','abracadabra')) //t
console.log(isSubsequence('abc','acb')) //f

console.log('*'.repeat(40));

// given a sorted array of int and target avg, check if there is a pair of values in the array where the average of the pair equals the target average
function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    var i = 0;
    var j = arr.length-1;
    while (i<j) {
        if ((arr[i] + arr[j])/2 > avg) {
            j--;
        } else if ((arr[i] + arr[j])/2 < avg) {
            i++;
        } else {
            return true;
        }
    }
    return false;
  }

console.log(averagePair([1,2,3],2.5)) //t
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) //t
console.log(averagePair([-1,0,3,4,5,6],4.1)) //f
console.log(averagePair([],4)) //f

console.log('*'.repeat(40));
// given a sorted array, count unique values in the array
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return 0;
    let i=0;
    for (let j=1;j<arr.length;j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

console.log('*'.repeat(40));
// given two integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    var str1 = num1.toString();
    var str2 = num2.toString();
    var freq1 = {};
    var freq2 = {};
    if (str1.length !== str2.length) return false;
    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
        if (!freq1[char]) {
            return false;
        } else {
            freq1[char]--;
        }
    }
    return true;
    
}

console.log(sameFrequency(182, 281)) // t
console.log(sameFrequency(34, 14)) // f
console.log(sameFrequency(3589578, 5879385)) // t
console.log(sameFrequency(22, 222)) // f
console.log(sameFrequency(222, 22)) // f

console.log('*'.repeat(40));
// given a variable number of arguments, check whether there are dupllicates among arguments passed in

function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let freq = {};
    for (var j=0;j<arguments.length;j++) {
        if (freq.hasOwnProperty(arguments[j])) return true;
        else freq[arguments[j]] = 1;
    }
    return false;
  }

  console.log(areThereDuplicates(1, 2, 3)) // f
  console.log(areThereDuplicates(1, 2, 2)) // t
  console.log(areThereDuplicates('a', 'b', 'c', 'a')) // t
