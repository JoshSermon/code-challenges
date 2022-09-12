// LEETCODE QUESTION 509 - FIBONACCI NUMBER



// Solution 1

// Recursion Tree
var fib = function(n) {
    if(n === 0) return 0;
    if (n === 0) return 1;

    return fib(n - 1) + fib(n - 2);
}


// Solution 2

// Iterative solution
// time - O(n) - 48ms
// space - O(1)



const fib = N => {
    let arr = [0, 1];
    
    for (let i = 2; i <= N; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    
    return arr[N];
};