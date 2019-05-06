// leetcode #108

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var sortedArrayToBST = function(nums, root=null) {
  if (!nums.length) return null;
  let idx = Math.floor(nums.length / 2);
  if (!root) root = new TreeNode(nums[idx]);
  
  let left = nums.slice(0, idx);
  let right = nums.slice(idx + 1);
  
  root.left = sortedArrayToBST(left, left[nums.length -1]);
  root.right = sortedArrayToBST(right, right[nums.length -1]);
  
  return root;
}; 