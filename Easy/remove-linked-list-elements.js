// LEETCODE QUESTION 203 - REMOVE LINKED LIST ELEMENTS


// Anytime I'm dealing with any sort of linked list with addition and subtraction removal or addition of a linked list, I should use a dummy node. 


//Psuedocode
// Target Value = 6
// Set two pointers - First -> (0 Idx) Second -> (1 Idx)
// traverse the whole list

 
// Solution 1
var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let cur = head; 

    while(cur) {
        if(cur.val === val) {
            prev.next = cur.next;
            cur = cur.next
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next;
};



// Solution 2
var removeElements = function(head, val) {
    if (!head) return head;
	
	// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
	// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set curr.next to the node after it then try again
	// otherwise iterate forward
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};
