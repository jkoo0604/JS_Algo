function swapPairs(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        i += 2;
    }
    return arr;
}

// console.log(swapPairs([1, 2, 3, 4]));
// console.log(swapPairs([1, 2, 3, 4, 5]));
// console.log(swapPairs(['Breandan', true, 42]));

function removeDupe(arr) {
    let val = arr[0];
    let i = 1;
    let j = 1;
    while (i < arr.length) {
        if (arr[i] !== val) {
            val = arr[i];
            arr[j] = arr[i];
            j++;
        }
        i++;        
    }

    arr.length = j;
    return arr;
}

// console.log(removeDupe([1,2,2,3,4,5,5,5,5,6]));
// console.log(removeDupe([1,2,3,4,5,6]));
// console.log(removeDupe([1,1,1,2,3,4,5,6,6,6,6,6,6]));

function minToFront(arr) {
    let minIdx = -1;
    let min = Infinity;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIdx = i;
        }
    }
    if (minIdx === -1) return arr;

    for (let j=minIdx; j>0; j--) {
        arr[j] = arr[j-1];
    }
    arr[0] = min;

    return arr;
}

// console.log(minToFront([4, 2, 1, 3, 5]));
// console.log(minToFront([1, 7, 5, 3, 2]));
// console.log(minToFront([2,5,7,9,3,4,1]));

function reverse(arr) {
    let i = 0;
    let j = arr.length -1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

// console.log(reverse([1,2,3,4,5]));
// console.log(reverse([6,5,4,3,2,1]));

function rotateArr(arr, shiftBy) {
    // [1, 2, 3, 4, 5]
    // [4, 5, 1, 2, 3] 2
    // [3, 4, 5, 1, 2] 3
    // [2, 3, 4, 5, 1] 4
    // [5, 1, 2, 3, 4] 1
    shiftBy = shiftBy % arr.length;
    if (shiftBy === 0) return arr;
    if (shiftBy < 0) shiftBy = arr.length + shiftBy;
    // for (let i = 0; i < shiftBy; i++) {
    //     let temp = arr[i];
    //     arr[i] = arr[arr.length - (shiftBy - i)];
    //     arr[arr.length - (shiftBy - i)] = temp;
    // }
    // let start = arr[shiftBy];

    // for (let j = shiftBy; j < arr.length; j++) {
    //     arr[j] = arr[j+1];
    // }

    // arr[arr.length - 1] = start;

    rotateHelper(arr, 0, arr.length - 1);
    rotateHelper(arr, 0, shiftBy - 1);
    rotateHelper(arr, shiftBy, arr.length -1);


    return arr;
}

function rotateHelper(arr, start, end) {
    let i = start;
    let j = end;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

console.log(rotateArr([1, 2, 3], 1));
console.log(rotateArr([1, 2, 3, 4, 5], 2));
console.log(rotateArr([1, 2, 3, 4, 5], -2));
console.log(rotateArr([1, 2, 3, 4, 5], 3));
console.log(rotateArr([1, 2, 3, 4, 5], 10));
console.log(rotateArr([1, 2, 3, 4, 5], 11));
console.log(rotateArr([1, 2, 3, 4, 5], 4));