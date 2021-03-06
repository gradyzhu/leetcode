// 669. Trim a Binary Search Tree

var trimBST = function(root, L, R) {
  if (!root) return null;
  if (root.val > R) return trimBST(root.left, L, R);
  if (root.val < L) return trimBST(root.right, L, R);
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};