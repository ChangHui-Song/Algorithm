import { convertArrayToList, ListNode } from '../utils';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || left === right) return head;

  const root = new ListNode(0, head);
  let start = root;
  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }
  const end = start.next;

  for (let i = 0; i < right - left; i++) {
    const tmp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = tmp;
  }

  return root.next;
}
