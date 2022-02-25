/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

var inorderTraversal = function(root) {
    if (!root)
        return [];
    
    let treeArr = [];
    
    if(root.left)
        treeArr.push(...inorderTraversal(root.left));
    treeArr.push(root.val);
    if(root.right)
        treeArr.push(...inorderTraversal(root.right));
    return treeArr;
};