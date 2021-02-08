/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head) return head;
    if (m === n) return head;
    let counter = 1;
    let curr = head;
    let prev = null;
    let tempNext;
    let prevCycle, nextCycle, start, end;
    
    while (curr && counter <= n) {
        if (counter === m) {
            prevCycle = prev;
            start = curr;
            tempNext = curr.next;
            curr.next = null;
            prev = curr;
            curr = tempNext;
        }
        if (counter === n) {
            nextCycle = curr.next;
            end = curr;
            curr.next = prev;
            if (m === 1) {
                head = curr;
            }
            break;
        }
        if (counter > m && counter < n) {
            tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        } 
        if (counter < m) {
            prev = curr;
            curr = curr.next;
        }
        // console.log(counter, prevCycle, nextCycle, curr, prev);
        counter++;
    }
    
    if (prevCycle) prevCycle.next = end;
    start.next = nextCycle;
    
    
    return head;
};