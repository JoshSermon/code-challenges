// LEETCODE QUESTION 234 | PALINDROME LINKED LIST


var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let len = 0;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }

    let mid = reverse(slow);

    while(len) {
        len--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;
}