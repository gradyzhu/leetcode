

// leetcode #344

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// o(1) space

var reverseString = function(s) {
  if (s.length % 2 == 0) {
       for (let i = 0; i < s.length / 2; i++) {
          [s[i], s[s.length - i - 1]] = [s[s.length - 1 - i], s[i]]
       }
  } else {
      for (let i = 0; i < Math.floor(s.length / 2); i++) {
          [s[i], s[s.length - i - 1]] = [s[s.length - 1 - i], s[i]]
      }
  }
  return s;
};