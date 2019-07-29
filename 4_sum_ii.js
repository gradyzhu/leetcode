// leetcode 454. 4Sum II

var fourSumCount = function(A, B, C, D) {
  let hash = {};
  let count = 0;
  
  for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
          let sum = A[i] + B[j];
          if (hash[sum]) {
              hash[sum] += 1
          } else {
              hash[sum] = 1;
          }
      }
  }
  
  for (let i = 0; i < C.length; i++) {
      for (let j = 0; j < D.length; j++) {
          let sum = -(C[i] + D[j]);
          if (hash[sum]) {
              count += hash[sum];
          }
      }
  }
  
  return count;
};