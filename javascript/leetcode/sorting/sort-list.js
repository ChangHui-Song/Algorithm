/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwoLists = (l1, l2) => {
  if (l1 && l2) {
    if (l1.val > l2.val) {
      const tmp = l1;
      l1 = l2;
      l2 = tmp;
    }
    l1.next = mergeTwoLists(l1.next, l2);
  }
  return l1 || l2;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!(head && head.next)) {
    return head;
  }
  let half = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    half = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  half.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return mergeTwoLists(l1, l2);
};
