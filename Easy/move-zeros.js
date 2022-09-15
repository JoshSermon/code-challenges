// LEETCODE QUESTION 283 - MOVE ZEROS



// Two Pointer



//Pseudocode
// To see if any number is equal to 0, i
// Two passes through the array

// O(n) Time complexity
// O(1) Space complexity


var moveZeros = function(nums) {
    let lastNonZeroIdx = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[lastNonZeroIdx] = nums[i];
            lastNonZeroIdx++
        }
    }
    for(let i = lastNonZeroIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
}