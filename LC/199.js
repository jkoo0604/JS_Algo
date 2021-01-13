/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    
    while (queue.length) {
        let level = queue.length-1;
        
        for (let i=0; i<=level; i++) {            
            let curr = queue.shift();
            if (i === level) {
                res.push(curr.val)
            }
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        
    }
    
    return res;
};