// sorting

function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        // default
        comparator = (a, b) => {
            return a - b;
        }
    }

    if (!arr.length) return arr;

    let i = arr.length - 1;
    let swapped = true;

    while (i > 0 && swapped) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        i--;
    }

    return arr;
}

function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            return a - b;
        }
    }

    if (!arr.length) return arr;

    let i = 0;
    let min, minIdx;

    while (i < arr.length) {
        min = arr[i];
        minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(min, arr[j]) > 0) {
                min = arr[j];
                minIdx = j;
            }
        }

        if (i !== minIdx) {
            let temp = arr[i];
            arr[i] = min;
            arr[minIdx] = temp;
        }

        i++;
    }

    return arr;
}

function insertionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            return a - b;
        }
    }

    if (!arr.length) return arr;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && comparator(arr[j], current) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);
    return mergeHelper(left, right, comparator);
}

function mergeHelper(arr1, arr2, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            return a - b;
        }
    }

    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) > 0) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
    if (start < end) {
        let sortedIdx = pivot(arr, comparator, start, end);
        quickSort(arr, comparator, start, sortedIdx - 1);
        quickSort(arr, comparator, sortedIdx + 1, end);
    }
    return arr;
}

function pivot(arr, comparator, start, end) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            return a - b;
        }
    }

    let i = start;
    let j = end;
    let pivotVal = arr[Math.floor((start + end) / 2)];
    while (i < j) {
        while (comparator(arr[i], pivotVal) < 0) i++;
        while (comparator(arr[j], pivotVal) > 0) j--;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return i;
}

// console.log(quickSort([13,7,0,6,30]))
// console.log(quickSort([65,0,42,-5,8,32,1]))
// console.log(quickSort([1,2,3,4,5]))