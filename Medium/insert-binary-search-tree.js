// LEETCODE QUESTION 701 - INSERT INTO A BINARY SEARCH TREE


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @param {number} val
//  * @return {TreeNode}
//  */

// PSUEDOCODE
// Create a function that passes in two arguments -> root and val
// If there isn't a root, the root should be the newNode. 
// if the value is greater than the root, then go to the children and check to see if the value is greater than the child. 
// if it isn't place the value there, place the value to the left of the child.
// If it is greater, place the value to the right of the child. 
// return newNode

// Solution 2

var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val);
    if(!root) return newNode;

    var cur = root;
    var prev = null;

    while(cur) {
        if(val > cur.val) {
            prev = cur;
            cur = cur.right;
        } else {
            prev = cur;
            cur = cur.left;
        }
    }

    if(val < prev.val) prev.left = newNode;
    else prev.right = newNode;

    return root;
};






// Solution 2

var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    }
    if(val > root.val){
        root.right = insertIntoBST(root.right, val);
    }
    else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};