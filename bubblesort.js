function bubbleSort(arr) {
    var sorted = arr.length;
    var i = 0;
    while (i < sorted) {
        var j = 1;
        while (j < sorted) {
            if (arr[j] < arr[j-1]) {
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            j++;
        }
        sorted--;
        i++;
    }
    return arr;
}

console.log(bubbleSort([13,7,0,6,30]))
console.log(bubbleSort([65,0,42,-5,8,32,1]))