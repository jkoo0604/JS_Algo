/*
Given a singly linked list of integers l and a non-negative integer n, move the last n list nodes to the beginning of the linked list.

Example

For l = [1, 2, 3, 4, 5] and n = 3, the output should be
rearrangeLastN(l, n) = [3, 4, 5, 1, 2];
For l = [1, 2, 3, 4, 5, 6, 7] and n = 1, the output should be
rearrangeLastN(l, n) = [7, 1, 2, 3, 4, 5, 6].
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
    if (!l || n === 0) return l;
    
    let curr = l;
    let runnerN = l;
    let end = l;
    let i = 0;
    
    while (i < n) {
        runnerN = runnerN.next;
        if (!runnerN) return l;
        i++;
    }
    
    while (runnerN && runnerN.next) {
        curr = curr.next;
        runnerN = runnerN.next;
    }
    
    // while (end.next) {
    //     end = end.next;
    // }

    runnerN.next = l;
    l = curr.next;
    curr.next = null;
    
    return l;    
}
