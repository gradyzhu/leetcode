// leetcode 849

var maxDistToClosest = function(seats) {
  let start = 0;
  let end = start + 1;
  let max = 0;
  
  while (end < seats.length) {
      if (seats[end] === 1 || end == seats.length -1) {
          if (seats[start] == 1 && seats[end] == 1) {
              max = Math.max(max, Math.floor((end-start)/2));   
          } else {
              max = Math.max(max, end - start);
          }
          start = end;
      }
      end++;
  }
  
  return max;
};