// 590. N-ary Tree Postorder Traversal

var postorder = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  
  while (stack.length) {
      let curr = stack[stack.length - 1];
      if (!curr.children.length) {
          stack.pop();
          res.push(curr.val);
      } else {
          for (let i = curr.children.length - 1; i >= 0; i--) {
              stack.push(curr.children[i]);
          }
          curr.children = [];
      }
  }
  return res;
};