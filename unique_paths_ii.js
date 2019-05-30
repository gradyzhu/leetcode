
// leetcode #63

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?



// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right


// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
  if (obstacleGrid[0][0] == 1) return 0;
  
  obstacleGrid[0][0] = 1;
  
  // account for initial column obstacles
  
  for (let i = 1; i < obstacleGrid.length; i++) {
      if (obstacleGrid[i][0] == 1) {
          obstacleGrid[i][0] = 0;
      } else {
          obstacleGrid[i][0] = obstacleGrid[i-1][0];
      }
  }

  // account for initial row obstacles
  
  for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[0][j] == 1) {
          obstacleGrid[0][j] = 0;
      } else {
          obstacleGrid[0][j] = obstacleGrid[0][j-1];
      }
  }

  // traverse through rest of grid starting at 1, 1
  // calculate sum using left cell + top cell
  
  for (let i = 1; i < obstacleGrid.length; i++) {
      for (let j = 1; j < obstacleGrid[0].length; j++) {
          if (obstacleGrid[i][j] == 1) {
              obstacleGrid[i][j] = 0;
          } else {
              obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
          }
      }
  }
  
  // return last item in matrix.
  
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};