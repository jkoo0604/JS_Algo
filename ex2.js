function countZeroes(arr) {
    // var idx = 0;
    // while (idx < arr.length) {
    //     if (arr[idx] === 0) break;
    //     else if (idx === arr.length - 1) return 0;
    //     idx++;
    // }
    // if (idx === 0) return arr.length;
    // else return arr.length - idx;

    //divide & conquer - O(log n)

    if (!arr.length || arr[arr.length-1] === 1) return 0;
    if (arr[0] === 0) return arr.length;
    let left = 0;
    let right = arr.length-1;
    let mid;

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            if (arr[mid-1] === 1) return arr.length - mid;
            right = mid - 1;
        } else {
            if (arr[mid+1] === 0) return arr.length - mid - 1;
            left = mid + 1;
        }
    }

    if (right === arr.length - 1) return 0;
    else return arr.length;
}

// given a sorted array and a number, count occurrence of number in array
// divide and conquer (o(log n))
function sortedFrequency(arr, num) {
    if (!arr.length || arr[0] > num || arr[arr.length - 1] < num) return -1;
    
    const count = (left, right) => {
        if (left > right) return 0;
        if (left === right && arr[right] !== num) return -1;
        if (arr[left] === num && arr[right] === num) return right - left + 1;

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > num) return count(left, mid - 1);
        else if (arr[mid] < num) return count(mid + 1, right);
        else return count(left, mid) + count(mid + 1, right);
    }

    let val = count(0, arr.length - 1);
    return val === 0 ? -1 : val;
}

// given a rotated array of sorted numbers and an integer, return the index of the integer in the array, or -1 if not found
// divide and conquer
function findRotatedIndex(arr, num) {
    if (!arr.length) return -1;

    const helper = (left, right) => {
        if (arr[left] === num) return left;
        if (arr[right] === num) return right;
        if (arr[left] < arr[right] && (num < arr[left] || num > arr[right])) return -1;
        if (left > right) return -1;
        if (left === right && arr[right] !== num) return -1;

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) return mid;
        else if (arr[mid] > num) {
            if (arr[left] > num) return helper(mid + 1, right);
            else return helper(left, mid - 1);
        } else {
            if (arr[right] < num) return helper(left, mid - 1);
            else return helper (mid + 1, right);
        }
    
    }

    return helper(0, arr.length - 1);
}