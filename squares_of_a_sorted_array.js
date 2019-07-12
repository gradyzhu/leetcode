// 977. Squares of a Sorted Array

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = arr => {
    let front = 0;
    let back = arr.length - 1;
    
    let res = new Array(arr.length -1);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[front]) < Math.abs(arr[back])) {
            res[i] = arr[back] * arr[back];
            back--;
        } else {
            res[i] = arr[front] * arr[front];
            front++;
        }
    }
    
    return res;
};