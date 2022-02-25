/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
*/

var preorderTraversal = function(root) {
    if (!root)
        return [];
    
    let arr = [];
    
    arr.push(root.val);
    
    if(root.left)
        arr.push(...preorderTraversal(root.left));
    
    if(root.right)
        arr.push(...preorderTraversal(root.right));
    
    return arr;
    
};
