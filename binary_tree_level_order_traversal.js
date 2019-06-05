
// leetcode #102

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
      let level = [];
      let sub = [];
      while(queue.length) {
          let curr = queue.shift();
          if (curr.left) level.push(curr.left);
          if (curr.right) level.push(curr.right);
          sub.push(curr.val);
      }
      res.push(sub);
      queue = level;
  }
  return res;
};