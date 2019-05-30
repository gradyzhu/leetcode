// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */

// leetcode #118

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

var generate = function(numRows) {
  if (numRows === 0) return [];
  let res = [[1]];
  
  for (let i = 1; i < numRows; i++) {
      res.push(makeLevel(res[res.length - 1]));
  }
  return res;
};


const makeLevel = arr => {
  let res = [1];
  
  for (let i = 0; i < arr.length - 1; i++) {
      res.push(arr[i] + arr[i + 1]);
  }
  res.push(1);
  return res;
};