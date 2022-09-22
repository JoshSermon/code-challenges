// LEETCODE QUESTION 237 - DELETE A NODE IN A LINKED LIST





// It is guaranteed that the node to be deleted is not a tail node in the list. 
// Only have access to the node to be deleted directly

var deleteNode = function(node) {
    let next = node.next.next;
    node.val = node.next.val;
    node.next = next;
}
