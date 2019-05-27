
// leetcode #94

// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

// iterative solution

var inorderTraversal = function(root) {
  if (!root) return [];
  
  let res = [];
  let stack = [root];
  
  while (stack.length) {
      let curr = stack[stack.length - 1];
      
      if (curr.left) {
          stack.push(curr.left);
          curr.left = null;
          continue;
      }
      
      curr = stack.pop();
      res.push(curr.val);
      
      if (curr.right) stack.push(curr.right);
  }
  
  return res;
};