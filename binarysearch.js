// given a sorted array and a value, return the index where the value exists or -1 if not found

function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length-1;
    var pivot = Math.floor((end+start)/2);
    while (start <= end && arr[pivot] !== val) {
        if (arr[pivot] < val) start = pivot+1;
        else end = pivot-1;
        pivot = Math.floor((end+start)/2);
    }
    if (arr[pivot] === val) return pivot;
    return -1;
}

console.log(binarySearch([1,2,3,4,5],2)) //1
console.log(binarySearch([1,2,3,4,5],3)) //2
console.log(binarySearch([1,2,3,4,5],5)) //4
console.log(binarySearch([1,2,3,4,5],6)) //-1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,400,44,64,79,84,86,95,96,98,99],10)) //2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,400,44,64,79,84,86,95,96,98,99],95)) //16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,400,44,64,79,84,86,95,96,98,99],100)) //-1