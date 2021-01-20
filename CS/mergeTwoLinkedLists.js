/*
Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    
    let head = new ListNode(0);
    let curr = head;
    let curr1 = l1;
    let curr2 = l2;
    
    while (curr1 || curr2) {
        let newNode;
        if (!curr1) {
            newNode = new ListNode(curr2.value);
            curr2 = curr2.next;
        } else if (!curr2) {
            newNode = new ListNode(curr1.value);
            curr1 = curr1.next;
        } else {
            if (curr1.value < curr2.value) {
                newNode = new ListNode(curr1.value);
                curr1 = curr1.next;
            } else {
                newNode = new ListNode(curr2.value);
                curr2 = curr2.next;
            }
        }
        curr.next = newNode;
        curr = curr.next;
    }
    
    return head.next;
}
