function selectionSort(arr) {
    for (var i=0; i<arr.length-1; i++) {
        var minFound = arr[i];
        var foundIdx = i;
        for (var j=i+1; j<arr.length; j++) {
            if (arr[j] < minFound) {
                minFound = arr[j];
                foundIdx = j;
            }
        }
        if (foundIdx !== i) {
            var temp = arr[i];
            arr[i] = arr[foundIdx];
            arr[foundIdx] = temp;
        }
    }
    return arr;

}

console.log(selectionSort([13,7,0,6,30]))
console.log(selectionSort([65,0,42,-5,8,32,1]))
console.log(selectionSort([1,2,3,4,5]))