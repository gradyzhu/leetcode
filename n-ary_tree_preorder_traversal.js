

// 589. N-ary Tree Preorder Traversal

var preorder = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while(stack.length) {
      let curr = stack.pop();
      res.push(curr.val);
      for (let i = curr.children.length - 1; i >= 0; i--) {
          stack.push(curr.children[i]);
      }
  }
  return res;
};