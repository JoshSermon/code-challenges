// LEETCODE QUESTION 83 - REMOVE DUPLICATES FROM SORTED LIST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solution 1
var deleteDuplicates = function(head) {
    if(!head) return null;

    let dummy = new ListNode(-Infinity, head);
    let cur = head;
    let prev = dummy;

    while(cur) {
        if(cur,val === prev.val) {
            while(cur && cur.val === prev.val) {
                cur = cur.next;
            }

            prev.next = cur;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next;

};




// Solution 2
var deleteDuplicates = function(head) {
    if(!head) return head;
    var cur = head;
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next;
        }else {
            cur = cur.next;
        }
    }
    return head;
}
