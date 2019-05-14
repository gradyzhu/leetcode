// leetcode #160

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  
  let seen = new Set();
  
  let currA = headA;
  while (currA) {
      seen.add(currA);
      currA = currA.next;
  }
  
  let currB = headB;
  while (currB) {
      if (seen.has(currB)) {
          return currB;
      }
      currB = currB.next;
  }
  
  return null;
};