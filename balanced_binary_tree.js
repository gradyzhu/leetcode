// leetcode #110 (EASY)

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


const findHeight = root => {
  if (!root) return -1;
  let left = findHeight(root.left);
  let right = findHeight(root.right);
  let max = left > right ? left : right;
  return 1 + max;
};

var isBalanced = function(root) {
  if (!root) return true;
  let balanced = Math.abs(findHeight(root.left) - findHeight(root.right)) <= 1;
  return balanced && isBalanced(root.left) && isBalanced(root.right);
};