
// 938. Range Sum of BST

// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.



const dfs = (min, max, root) => {
  if (!root) return 0;
  
  if (root.val >= min && root.val <= max) {
      if (!root.left) return root.val + dfs(min, max, root.right);
      if (!root.right) return root.val + dfs(min, max, root.left);
      return root.val + dfs(min, max, root.left) + dfs(min, max, root.right);
  } else {
      return dfs(min, max, root.left) + dfs(min, max, root.right)
  }
}