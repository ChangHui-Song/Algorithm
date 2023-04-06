import { ListNode } from '../../utils';

export function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const arr: number[] = [];
  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  const newHead = new ListNode();
  let newNode = newHead;
  for (let num of arr.sort((a, b) => a - b)) {
    newNode.next = new ListNode(num);
    newNode = newNode.next;
  }

  return newHead.next;
}
