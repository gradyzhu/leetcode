// 56. Merge Intervals

var merge = function(matrix) {
  if (!matrix.length) return [];
  let merged = [];
  let sorted = matrix.sort((a,b) => a[0] - b[0]);
  
  while (merged.length !== sorted.length) {
      let i = 0;
      while (i < sorted.length) {
          let curr = sorted[i];
          let next = sorted[i+1];
          if (!next) {
              merged.push(sorted[i]);
              i++;
          } else if (curr[1] >= next[0]) {
              if (curr[1] > next[1]) {
                  merged.push(curr);
              } else {
                  merged.push([curr[0], next[1]]);
              }
              i+=2;
          } else {
              merged.push(curr);
              i+=1;
          }
      }
      if (merged.length == sorted.length) return sorted;
      sorted = merged;
      merged = [];
  }
};