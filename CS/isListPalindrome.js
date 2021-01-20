/*
Given a singly linked list of integers, determine whether or not it's a palindrome.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;

For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    if (!l) return true;
    
    let val = [];
    let curr = l;
    
    while (curr) {
        val.push(curr.value);
        curr = curr.next;
    }
    
    let left = 0, right = val.length - 1;
    
    while (left < right) {
        if (val[left] !== val[right]) return false;
        left++;
        right--;
    }
    
    return true;   
    
}
