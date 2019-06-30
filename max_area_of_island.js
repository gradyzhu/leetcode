
// 695. Max Area of Island
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          maxArea = Math.max(maxArea, dfs(grid, i, j))
      }
  }
  return maxArea;
};

const dfs = (grid, i, j) => {
  if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] != 1) return 0;
  grid[i][j] = 0;
  return 1 + dfs(grid, i, j+1) + dfs(grid, i, j-1) + dfs(grid, i-1, j) + dfs(grid, i+1, j);
};