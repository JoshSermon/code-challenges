// LEETCODE QUESTION 88 - MERGE SORTED ARRAY


// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */


//Psuedocode
//Two Pointers 

// [1,2,3,0,0,0]   m = 3
// [2,5,6] n = 3

// Solution 1
var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;
    
    while(second >= 0) {
        let fVal = nums1[first];
        let sVal = nums2[second];
        
        if(fVal > sVal) {
            nums1[i] = fVal;
            i--;
            first--;
        } else {
            nums1[i] = sVal;
            i--;
            second--;
        }
    }
};






// Solution 2
var merge = function (nums1, m, nums2, n) {
    var len = m + n;
    m--;
    n--;
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums[n--];
        }
    }
};