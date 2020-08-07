// given a string return a new string in reverse

function reverse(str) {
    if (str.length === 0) return '';
    return str[str.length-1] + reverse(str.slice(0,str.length-1));
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

console.log('*'.repeat(40));

// given a string return true is str is a palindrome

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length-1]) return false;
    return isPalindrome(str.slice(1,str.length-1));
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

console.log('*'.repeat(40));

// given an array and a callback, return true if a single value in the array returns true when passed to the callback. otherwise return false

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

// sample callback
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false

console.log('*'.repeat(40));

// given array of arrays, retrun a new array with all values flattened

function flatten(arr) {
    let returnArr = [];

    function helper(tempArr) {
        if (tempArr.length === 0) return;
        for (let i=0;i<tempArr.length;i++) {
            if (!Array.isArray(tempArr[i])) returnArr.push(tempArr[i])
            else helper(tempArr[i]);
        }
    }

    helper(arr);
    return returnArr;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1, 2, 3]