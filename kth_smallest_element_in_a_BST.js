// #leetcode 230. Kth Smallest Element in a BST

// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

var kthSmallest = function(root, k) {
    
  if (!root) return null; 
  let smallests = []; 
  let stack = [root];
  
  while (smallests.length !== k) {       
      let curr = stack[stack.length - 1];
      
      if (!curr.left && !curr.right) {
          smallests.push(stack.pop());
          continue;
      }
      
      if (!curr.left) {
          smallests.push(stack.pop());
          stack.push(curr.right);
      }
      
      if (curr.left) {
          stack.push(curr.left);
          curr.left = null;
      }
  }
  
  return smallests[smallests.length - 1].val;
  
};