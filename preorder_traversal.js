
// leetcode # 144

// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?

var preorderTraversal = function(root) {
  if (!root) return [];
  
  let stack = [root];
  let res = [];
  
  while (stack.length) {
      let curr = stack.pop();
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
      res.push(curr.val);
  }
  
  return res;
};