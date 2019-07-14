
// 559. Maximum Depth of N-ary Tree
// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
  return dfs([], root, {});
};

const dfs = (depths, root, memo) => {
   if (!root) return 0;
   if (!root.children.length) return 1;
   
   for (let i = 0; i < root.children.length; i++) {
       let curr = root.children[i];
       depths.push(1 + dfs([], curr, memo));
   }
   
   return Math.max(...depths);
};


// const maxDepth = root => {
//   if (!root) return 0;
  
//   let max = 1;
//   for (let i = 0; i < root.children.length; i++) {
//       max = Math.max(max, maxDepth(root.children[i]) + 1)
//   }
  
//   return max;
// }