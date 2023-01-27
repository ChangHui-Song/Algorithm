/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  const cur = new ListNode(0);
  const parent = cur;

  while (head) {
    while (cur && cur.next.val < head.val) {
      cur = cur.next;
    }

    const tmp = cur.next;
    cur.next = head;
    head = head.next;
    cur.next.next = tmp;

    if (head && head.val < cur.val) {
      cur = parent;
    }
  }

  return parent.next;
};
