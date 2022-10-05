// LEETCODE QUESTION 206 | REVERSE LINKED LIST


// 1 -> 2 -> 3 -> 4 -> 5
// Always think of a pointer for linked list
// Next and Current

// O(n) Time complexity
// O(1) Space complexity

var reverselist = function(head) {
    let cur = head;
    let prev = null;
    let next = null;

    while(cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};