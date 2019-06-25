
// leetcode 120. Triangle

// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

var minimumTotal = function(triangle, currIdx = 0, memo = {}) {
  if (!triangle.length) return 0;
  
  if (triangle.length === 1) {
      return triangle[0][currIdx];
  }
  
  let curr = triangle[0][currIdx];
  let leftMin;
  let rightMin;
  
  if (memo[[triangle.length, currIdx]]) {
      leftMin = memo[[triangle.length, currIdx]];
  } else {
      memo[[triangle.length, currIdx]] = minimumTotal(triangle.slice(1), currIdx, memo);
      leftMin = memo[[triangle.length, currIdx]];
  }
  
  if (memo[[triangle.length, currIdx+1]]) {
      rightMin = memo[[triangle.length, currIdx + 1]];
  } else {
      memo[[triangle.length, currIdx+1]] = minimumTotal(triangle.slice(1), currIdx + 1, memo);
      rightMin = memo[[triangle.length, currIdx + 1]];
  }
  
  return curr + Math.min(leftMin, rightMin);
};