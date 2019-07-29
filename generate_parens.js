
var generateParenthesis = function(n) {
  dfs(res = [], "", 0, 0, n);
  return res;
};

const dfs = (array, str, openCount, closeCount, max) => {
  if (str.length === max*2) { 
      array.push(str);
      return;
  }
  
  // add open parens first
  // constrain close parens to the number of open parens.
  
  if (openCount < max) {
      dfs(array, str + "(", openCount + 1, closeCount, max);
  }
  if (closeCount < openCount) {
      dfs(array, str + ")", openCount, closeCount + 1, max);
  }
};