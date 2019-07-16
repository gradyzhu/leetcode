
// 860. Lemonade Change

var lemonadeChange = function(bills) {
  let hash = {
      5: 0, // 1
      10: 0 // 2
  };
  
  for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          hash[5]++;
          continue;
      }
      
      if (bills[i] === 10) {
          if (hash[5] < 1) return false;
          hash[10]++;
          hash[5]--;
          continue;
      }
      
      if (bills[i] === 20) {
          if (hash[5] < 1) return false;
          if (hash[5] < 3 && hash[10] < 1) return false;
          if (hash[5] >= 1 && hash[10] >= 1) {
              hash[5]--
              hash[10]--
          } else {
              hash[5] -= 3;
          }
      }
      
  }
  
  return true;
};