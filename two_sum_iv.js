// 653. Two Sum IV - Input is a BST
// Easy

// 898

// 107

// Favorite

// Share
// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True
 

// Example 2:

// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False

const findTarget = function(root, k) {
  let vals = dfs(root);
  let hash = {};
  
  for (let i = 0; i < vals.length; i++) {
      hash[vals[i]] = i;
  }
  
  for (let i = 0; i < vals.length; i++) {
      let curr = vals[i];
      let complement = k - curr;
      if (complement in hash && hash[complement] !== i) {
          return true;
      }
  }
  
  return false;
};

const dfs = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  let left = dfs(root.left);
  let right = dfs(root.right);
  return left.concat(root.val).concat(right);
};