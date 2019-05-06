// leetcode #11

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// brute force
var maxArea = function(height) {
  let largest = 0;
  for (let i = 0; i < height.length - 1; i++) {
      for (let j = i + 1; j < height.length; j++) {
          let lower = height[i] < height[j] ? height[i] : height[j];
          if (largest < (lower * (j - i))) largest = lower * (j - i) ;
      }
  }
  return largest;
};

// O(n) 

var maxArea = function(height) {   
    let largestArea = 0;
    while (height.length > 1) {
        let left = height[0];
        let right = height[height.length - 1]
        let shorter = left < right ? left : right;
        let area = (height.length - 1) * shorter;
        if (largestArea < area) largestArea = area;
        if (shorter === left) {
            height.shift();
        } else {
            height.pop();
        }
    }
    
    return largestArea;
};