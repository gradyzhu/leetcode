const jump = nums => {
  let curr = 0;
  let end = 0;
  let furthest = 0;
  let jumps = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
      furthest = Math.max(furthest, i + nums[i]);
      if (i == end) {
          jumps++;
          end = furthest;
      }
  }
  
  return jumps;
};
