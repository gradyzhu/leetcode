
// leetcode #3

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// /**
//  * @param {string} s
//  * @return {number}
//  */\

var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  
  while(s.length) {
      let subLongest = 0;
      let seen = new Set();
      
      for (let i = 0; i < s.length; i++) {
          if (seen.has(s[i])) {
              s = s.slice(1);
              break;
          } else {
              seen.add(s[i]);
              subLongest++;
              if (i === s.length - 1) {
                  s = "";
                  break;
              }
          }
      }
      
      if (subLongest > longest) longest = subLongest;
  }
  
  return longest;
};