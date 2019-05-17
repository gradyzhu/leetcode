// leetcode #141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// o(n) space
// var hasCycle = function(head, pos) {
//     let set = new Set();
//     let curr = head;
//     while(curr) {
//         if (!set.has(curr)) {
//             set.add(curr)
//         } else {
//             return true;
//         }
//         curr = curr.next;
//     }
//     return false;
// };

// o(1) space

const hasCycle = (head, pos) => {
  if (!head) return false;
  if (!head.next) return false;
  let walker = head;
  let runner = head.next;
  
  while (runner != walker) {
      if (!runner || !runner.next || !walker) return false;
      runner = runner.next.next;
      walker = walker.next;
  }
  
  return true;
};