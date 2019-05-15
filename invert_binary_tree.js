
// #leetcode 226

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


var invertTree = function(root) {
  if (!root) return null;
  
  let invertedLeft = invertTree(root.left);
  let invertedRight = invertTree(root.right);
  
  root.left = invertedRight;
  root.right = invertedLeft;
  
  return root;
};
