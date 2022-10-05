// LEETCODE QUESTION 141 - LINKED LIST CYCLE I

// DOUBLE POINTTER - REMEMBER THIS METHOD

var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) return true;
    }
    
    return false;
};


// Solution 2

var hasCycle = function(head) {
    if(!head) return false;
    let slow = head;
    let fast = head;
     
     while(fast !== null && fast.next !== null) {
         fast = fast.next.next;
         slow = slow.next;
         
         if (slow === fast) {
             return true;
         }
     }
             return false;
 };