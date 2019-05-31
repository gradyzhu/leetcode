
// leetcode 204

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


var countPrimes = function(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) count++;
    }
    return count;
};

const isPrime = num => {
    if (num < 2) return false;
    if (num == 2) return true;
    
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) return false;
    }
    
    return true;
};