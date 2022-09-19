// LEETCODE QUESTION 102 - BINARY TREE LEVEL ORDER TRAVERSAL




//Psuedocode 
//Breadth First Search Traversal
// Set a queue - start it at the root(3)
// while there is something in the loop (not empty), I want to store the length of the queue at that current level
// Then, I want to create another while loop that will pull the elements off that level into an array (shift) then (push)
// result = [[3], [9, 20], [15, 7]]


// Solution 1

var levelOrder = function(root) {
    if(!root) return [];        // Edge case - If root is null return an empty array

    const queue = [root];       // initialize the queue with root
    const result = [];          // declaring output array

    while(queue.length) {
        let amount = queue.length; // Get the length
        result.push(queue.map(node => node.val)); 

        while(amount--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return result;

};


// Solution 2

var levelOrder = function(root) {
    if(!root) return []       // Edge Case - If root is null return an empty array
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declaring output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}