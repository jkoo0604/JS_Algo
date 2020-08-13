function quickSort(arr, start=0, end=arr.length-1) {
    if (start < end) {
        var sortedIdx = partition(arr, start, end);
        quickSort(arr, start, sortedIdx);
        quickSort(arr, sortedIdx+1, end);
    }
    return arr;
}

function partition(arr, start, end) {
    let pivotVal = arr[Math.floor((start+end)/2)];
    let i = start;
    let j = end;
    while (i < j) {
        while (arr[i] < pivotVal) {
            i++;
        }
        while (arr[j] > pivotVal) {
            j--;
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return i;
}

console.log(quickSort([13,7,0,6,30]))
console.log(quickSort([65,0,42,-5,8,32,1]))
console.log(quickSort([1,2,3,4,5]))