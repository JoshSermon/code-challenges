// QUESTION 
// LEETCODE QUESTION 192 - SORT AN ARRAY
// Given an array of integers nums, sort the array in ascending order.


// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// Constraints:
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104


// PSUEDOCODE
// Using INSERTION SORT because it's nearly sorted and it's O(n) linear time complexity - O (1) - space complexity
// create a variable, pass in argument (nums)
// create a for loop to go through each index. 
// need to have 3 pointers:
// i 
// j
// j-1
// need an outer loop with i
// set j in the same index as i -> then place j-1 one index behind (decrement)
// while j is greater than 0 and (&&) while nums[j] is less than nums[j-1] -> if condition is true, swap those numbers. Then, decrement j until it breaks the condition and then increment i.
// then redo loop
// return sorted array

var sortArray = function(nums) {
    for(let i = 1; i < nums. length; i++) {
        let j = i; 
        while(j > 0 && nums[j] < arr[j - 1]) { 
            [nums[j], nums[j - 1]] = nums[j - 1], [nums[j]]; 
            j--;
        }
    }
    return nums;
};
