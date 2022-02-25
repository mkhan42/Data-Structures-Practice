/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.
*/

var postorderTraversal = function(root) {
    if(!root)
        return [];
    
    let arr = [];
    
    if(root.left)
        arr.push(...postorderTraversal(root.left));
    if(root.right)
        arr.push(...postorderTraversal(root.right));
    arr.push(root.val);
    
    return arr;
};
