// 701. Insert into a Binary Search Tree

var insertIntoBST = function(root, val, source) {
  if (!root) return new TreeNode(val);
  
  if (!root.left && val < root.val) {
      root.left = new TreeNode(val);  
  } else if (!root.right && val > root.val) {
      root.right = new TreeNode(val);
  } else {
      if (val > root.val) {
          insertIntoBST(root.right, val);
      } else {
          insertIntoBST(root.left, val);
      }
  }
  
  return root;
};