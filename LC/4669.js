/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //in order
    // call left, push parent val, call right
    
    // pre order
    // push parent val, call left, call right
    
    let inMap = new Map();
    let preIdx = 0;
    
    for (let i=0; i<preorder.length; i++) {
        inMap.set(inorder[i], i);
    }
    
    const build = (start, end) => {        
        let inorderIdx = inMap.get(preorder[preIdx]);
        if (end < start) return null;
        
        let currentRoot = new TreeNode(preorder[preIdx]);
        preIdx++;
        currentRoot.left = build(start, inorderIdx - 1);
        currentRoot.right = build(inorderIdx + 1, end);
        
        return currentRoot;        
    }
    
    return build(0, preorder.length - 1);
};
