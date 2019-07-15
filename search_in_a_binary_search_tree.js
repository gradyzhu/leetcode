// 700. Search in a Binary Search Tree

var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val == val) return root;
  if (root.left) {
      let left = searchBST(root.left, val);
      if (left) return left;
  }
  if (root.right) {
      let right = searchBST(root.right, val);
      if (right) return right;
  }
  return null;
};