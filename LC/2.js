/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]


Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) {
        return new ListNode(0);
    } else if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }
    
    let carryOver = 0;
    let sum;
    let runner1 = l1;
    let runner2 = l2;
    let sumNode = new ListNode(0);
    let runnerSum = sumNode;
    
    while (runner1 && runner2) {
        runnerSum.next = new ListNode(0);
        runnerSum = runnerSum.next;
        sum = carryOver + runner1.val + runner2.val;
        if (sum > 9) {
            carryOver = 1;
            runnerSum.val = sum - 10;
        } else {
            carryOver = 0;
            runnerSum.val = sum;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    
    while (runner1) {       
        runnerSum.next = new ListNode(0);
        runnerSum = runnerSum.next;
        sum = carryOver + runner1.val;
        if (sum > 9) {
            carryOver = 1;
            runnerSum.val = sum - 10;
        } else {
            carryOver = 0;
            runnerSum.val = sum;
        }
        runner1 = runner1.next;
    }
    
    while (runner2) {
        runnerSum.next = new ListNode(0);
        runnerSum = runnerSum.next;
        sum = carryOver + runner2.val;
        if (sum > 9) {
            carryOver = 1;
            runnerSum.val = sum - 10;
        } else {
            carryOver = 0;
            runnerSum.val = sum;
        }
        runner2 = runner2.next;
    }
    
    if (carryOver > 0) {
        runnerSum.next = new ListNode(carryOver);
    }
    
    return sumNode.next;
};