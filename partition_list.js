// 86. Partition List
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

var partition = function(head, x) {
  let p1 = new ListNode(0);
  let p2 = new ListNode(0);
  let head1 = p1;
  let head2 = p2;
  
  while (head) {
      if (head.val < x) {
          p1.next = head;
          p1 = p1.next;
      } else if (head.val >= x) {
          p2.next = head;
          p2 = p2.next;
      }
      head = head.next;
  }
  p2.next = null;
  p1.next = head2.next;
  return head1.next;
};