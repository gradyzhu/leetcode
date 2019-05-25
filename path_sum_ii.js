// leetcode #113

// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

var pathSum = function(root, sum) {
  // returns a 2d array
  if (!root) return [];
  if (root.left == null & root.right == null && sum === root.val) return [[root.val]];
  
  let res = [];
  
  if (root.left) {
      let leftArray = pathSum(root.left, sum - root.val);
      leftArray.forEach(arr => {
          if (root.val + summer(arr) === sum) res.push([root.val].concat(arr));
      });
  } 
  
  if (root.right) {
      let rightArray = pathSum(root.right, sum - root.val);
      rightArray.forEach(arr => {
          if (root.val + summer(arr) === sum) res.push([root.val].concat(arr));
      });
  } 
  
  return res;
};