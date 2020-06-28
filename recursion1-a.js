// Write a function that, given an array, returns the sum of the elements. USE RECURSION
function sumArr(array, index=0){
    // Base case is what keeps us from exceeding our max call stack size/looping infinitely
    if (index == array.length-1) {
        return array[index];
    }

    // This would be my general (recursive) case
    return array[index] + sumArr(array, index+1);
}

// Write a function that returns the sum of a number RECURSIVELY
function sigma(num) {
    // BASE CASE!! We've reached our base case if num is 1, because the sigma of 1 is 1
    if (num == 1) {
        return num;
    }

    // General (recursive) case: we need to add num to the sigma of num - 1 and return it
    return num + sigma(num-1);
}

// Write a function that, given a number, returns its factorial
function factorial(num){
    // Base case! If num is 1, we've reached the smallest part of the factorial
    if (num == 1) {
        return num;
    }

    // Recursive Case: Multiply the current number by whatever the function call returns.

    // The logic behind this is that, for example, 
    return num * factorial(num-1);
}

//Write a function that, given a number, will return that element in the Fibonacci sequence
function rFib(num) {
    if(num <= 1) {
        return num;
    }
    return rFib(num-1) + rFib(num-2);
}


// Write a function that performs a binary search recursively.
function rBinarySearch(array, num, start=0, end=0) {
    if(end==0 & start==0){
        end = array.length-1;
    }
    else if(start+1 == end){
        if(array[start]==num){
            return true;
        }
        if(array[end]==num){
            return true;
        }
        return false;
    }
    let i = Math.round((end-start)/2)+start
    console.log('i', i,'start', start,'end', end)
    if(array[i]==num){
        return true;
    }
    else if(num > array[i]){
        return rBinarySearch(array, num, i, end);
    }
    else{
        return rBinarySearch(array, num, start, i);
    }
}