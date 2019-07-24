
// 547. Friend Circles

var findCircleNum = function(M) {
  let count = 0;
  let visited = new Set();
  
  for (let i = 0; i < M.length; i++) {
      if (!visited.has(i)) {
          visited.add(i);
          count++; 
          dfs(M, visited, i);
      }
  }
  
  return count;
};

const dfs = (matrix, visited, i) => {
  for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1 && !visited.has(j)) {
          visited.add(j);
          dfs(matrix, visited, j);
      }
  }
};