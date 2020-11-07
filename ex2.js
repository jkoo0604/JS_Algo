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