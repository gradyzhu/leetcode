
// leetcode #215

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
var findKthLargest = function(nums, k, largest = new Set()) {
  let heap = [ null ];
  
  for (let i = 0; i < nums.length; i++) {
      insert(heap, nums[i]);
  }
  
  count = 0;
  while (count < k - 1) {
      removeMax(heap);
      count++;
  }
  
  return heap[1];
};

const insert = (heap, value) => {
  heap.push(value);
  if (heap.length == 2) return;
  siftUp(heap);
};

const siftUp = (heap, idx = heap.length - 1) => {
  if (idx <= 1) return;
  let parentIdx = Math.floor(idx / 2);
  if (heap[parentIdx] < heap[idx]) {
      [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]]
      siftUp(heap, parentIdx);
  }
};

const siftDown = (heap, idx = 1) => {
  if (idx >= heap.length - 1) return;

  let leftIdx = idx * 2;
  let rightIdx = idx * 2 + 1;
  
  let leftVal = (heap[leftIdx] === undefined) ? -Infinity : heap[leftIdx];
  let rightVal = (heap[rightIdx] === undefined) ? -Infinity : heap[rightIdx];
  
  if (heap[idx] > leftVal && heap[idx] > rightVal) return;
  
  let greaterIdx = leftVal > rightVal ? leftIdx : rightIdx;
  [heap[greaterIdx], heap[idx]] = [heap[idx], heap[greaterIdx]];
  
  siftDown(heap, greaterIdx);
};

const removeMax = (heap) => {
  let max = heap[1];
  heap[1] = heap.pop();
  siftDown(heap);
};

