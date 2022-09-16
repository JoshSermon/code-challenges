// LEETCODE QUESTION 796 - REMOVE DUPLICATES FROM SORTED LIST


//Psuedocode
// concatenate -> "abcdeabcde"
// It's right
// Includes works or a sliding window approach
// Time Complexity = o(n)
// Space Complexity = 0(n)




//Solution 1
var rotateString = function(A,B) {
    if(A.length !== B.length) return false;
    if(A.length === 0 && B.length === 0) return true;

    A = A + A;
    return A.includes(B);
};




//Solution 2
var rotateString = function (A, B) {
    return (A + A).includes(B) && A.length === B.length;
  };