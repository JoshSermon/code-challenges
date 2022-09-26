// LEETCODE QUESTION 108 - CONVERT SORTED ARRAY TO BINARY SEARCH TREE


// Psuedocode 
// Three pointers - left, middle, right
// Math.floor or math.ceiling will work


//Solution 1
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {

    if(left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, left, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, right);


    return root;
}





//Solution 2 
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    // subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};