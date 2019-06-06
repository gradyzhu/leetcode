
// leetcode #20

// Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  
  let arr = s.split('');
  let stack = [];
  
  while (arr.length) {
      let curr = arr.shift();
      
      if (curr == "(" || curr == "[" || curr == "{") {
          stack.push(curr);
          continue;
      }
      
      if (
          curr == "]" && stack[stack.length - 1] !== "[" ||
          curr == ")" && stack[stack.length - 1] !== "(" ||
          curr == "}" && stack[stack.length - 1] !== "{"
      ) {
          return false;
      }
      
      stack.pop();
  }
  
  return stack.length == 0;
};