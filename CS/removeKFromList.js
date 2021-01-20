/*
Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    if (!l) return l;
    
    let head = l;
    let prev, curr;
    
    while (head && head.value === k) {
        head = head.next;
    }
    
    if (!head) return null;
   
    prev = head;
    curr = prev.next;
    
    while (curr) {
        if (curr.value === k) {
            prev.next = curr.next;
            curr.next = null;
            curr = prev.next;          
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    
    return head;
}
