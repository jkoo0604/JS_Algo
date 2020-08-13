function insertionSort(arr) {
    for (var i=1;i<arr.length;i++) {
        var currentVal = arr[i];
        var j=i-1;
        while (j>=0 && arr[j] > currentVal) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([13,7,0,6,30]))
console.log(insertionSort([65,0,42,-5,8,32,1]))
console.log(insertionSort([1,2,3,4,5]))