// LEETCODE QUESTION 102 - BINARY TREE LEVEL ORDER TRAVERSAL




//Psuedocode 
//Breadth First Search Traversal
// Set a queue - start it at the root(3)
// while there is something in the loop (not empty), I want to store the length of the queue at that current level
// Then, I want to create another while loop that will pull the elements off that level into an array (shift) then (push)
// result = [[3], [9, 20], [15, 7]]




var levelOrder = function(root) {
    if(!root) return [];        // Edge case

    const queue = [root];       // Set initializer or Start point
    const result = [];          // result will be in an array

    while(queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while(len--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return result;

};



// Result will be an empty array []