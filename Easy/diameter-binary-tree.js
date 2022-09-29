// LEETCODE QUESTION 543 - DIAMETER OF BINARY TREE


// DFS 


//Solution 1
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;

    let max = 0; 

    const dfs = (node) => {
        if(!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        max = Math.max(left + right, max);

        return Math.max(left, right) + 1
    }

    dfs(root);
    return max;
}


//Solution 2
function diameterOfBinaryTree(root) {
    let max = 0
     
     function maxDepth(root) {
         if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
         let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
         let right = maxDepth(root.right) //Same above
     
         
         max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
         return Math.max(left, right) + 1 // the path goes through the root so we add 1(for the root)
     }
     //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
     maxDepth(root)
     return max
 };