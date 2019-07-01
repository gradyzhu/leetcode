// 199. Binary Tree Right Side View

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.


var rightSideView = function(root) {
  if (!root) return [];
  let res = [root.val];
  let queue = [root]; 
  while (queue.length) {
      let nextLevel = [];
      while (queue.length) {
          let curr = queue.shift();
          if (curr.left) nextLevel.push(curr.left);
          if (curr.right) nextLevel.push(curr.right);
      }
      if (nextLevel.length) {
          res.push(nextLevel[nextLevel.length - 1].val);
      }
      queue = nextLevel;
  }
  return res;
};