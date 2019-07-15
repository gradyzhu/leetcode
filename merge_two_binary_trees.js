// 617. Merge Two Binary Trees
// Easy

// 1889

// 133

// Favorite

// Share
// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  if (!t1 || !t2) return t1 ? t1 : t2;
  
  let res = new TreeNode(null);
  res.val = t1.val + t2.val;
  res.left = mergeTrees(t1.left, t2.left);
  res.right = mergeTrees(t1.right, t2.right);
  
  return res;
};