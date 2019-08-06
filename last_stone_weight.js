// leetcode 1046;

var lastStoneWeight = function(stones) {
  stones = stones.sort((a,b) => b - a);
  
  while (stones.length > 1) {
      let largest = stones.shift();
      let secondLargest = stones[0];

      if (largest > secondLargest) {
          stones[0] = largest - secondLargest;
          stones = stones.sort((a,b) => b - a);
      } else if (largest == secondLargest) {
          stones.shift();
      }
  }
  
  return stones.length ? stones[0] : stones.length;
};