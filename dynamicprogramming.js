// solving complex problems by breaking them down into a collection of simpler subproblems
// needs to meet two conditions:

// overlapping subproblems
// if a problem can be broken down into subproblems which are reused several times
// e.g. recursive fibonacci function
// recursive mergeSort is NOT an overlapping subproblem (it is a subproblem) since each mergeSort has different (shorter) arrays to sort

// optimal substructure
// if an optimal solution can be constructed frmo optimal solutions of its subproblems
// e.g. shortest path (shortest path between two vertices is the sum of shortest paths between any vertices in its shortest path)
// longest path is NOT optimal substructure because we may need to revisit some vertices if we sum all paths
// e.g. suppose cheapest flight from A to B is A-C-B (one layover), but often cheapest flight from A to C is not the direct flight A-C from above, and something like A-D-C => not optimal substructure

// fibonacci sequence
function fib(n) {
    if (n <= 0) return null;
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(2));
console.log(fib(3));
console.log(fib(5));

// O(2^N) - NOT efficient

// use dynamic programming to optimize

// memoization (top-down)
// storing results of expensive function calld and returning cached result when the same input soccur again

function fib2(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

function fib3(n, memo=[undefined, 1, 1]) {
    if (memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
// O(N)
// fast, but may run into call stack limit

// tabulation (bottom-up)
// storing result of previous result in a table (array)
// usually done using iteration - better space complexity

function fib4(n) {
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for (var i=3; i<=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
// O(N)
// no call stack limit
