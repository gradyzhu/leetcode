// leetcode #647

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

var countSubstrings = function(s) {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
      let curr = s[i];
      
      let oddNextIdx = i+1;
      let oddPrevIdx = i-1;
      
      let evenNextIdx = i+2;
      let evenPrevIdx = i-1; 
      
      if (s[i + 1] == curr) {
          count+=checkOutwards(evenPrevIdx, evenNextIdx, s);
          count++;
      }
      
      count += checkOutwards(oddPrevIdx, oddNextIdx, s);
      count++;
  }
  return count;
};


const checkOutwards = (start, end, s) => {
  let count = 0;
  if (start >= 0 || end <= s.length - 1) {
      while (s[start] === s[end]) { 
          if (!s[start] || !s[end]) break;
          start--;
          end++;
          count++;
      }
  }
  return count;
};