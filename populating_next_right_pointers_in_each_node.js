// 116. Populating Next Right Pointers in Each Node

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.


var connect = function(root) {
  if (!root) return null;
  root.next = null;
  let queue = [root];
  while (queue.length) {
      let nextLvl = [];
      while (queue.length) {
          let curr = queue.shift();
          if (curr.left) nextLvl.push(curr.left);
          if (curr.right) nextLvl.push(curr.right);
      }
      for (let i = 0; i < nextLvl.length; i++) {
          if (!nextLvl[i+1]) {
              nextLvl[i].next = null;
          } else {
              nextLvl[i].next = nextLvl[i+1];
          }
      }
      queue = nextLvl;
  }
  return root;
};