import { ListNode } from '../../utils';

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  const newHead = new ListNode(undefined);
  let cur = newHead;

  while (head) {
    while (cur.next && cur.next.val < head.val) {
      cur = cur.next;
    }

    const tmp = cur.next;
    cur.next = head;
    head = head.next;
    cur.next.next = tmp;

    if (head && head.val < cur.val) {
      cur = newHead;
    }
  }

  return newHead.next;
}
