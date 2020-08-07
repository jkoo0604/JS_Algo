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