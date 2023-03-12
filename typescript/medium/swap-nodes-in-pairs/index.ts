import { ListNode } from '../../utils';

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const p = head.next;

  head.next = swapPairs(p.next);
  p.next = head;
  return p;
}
