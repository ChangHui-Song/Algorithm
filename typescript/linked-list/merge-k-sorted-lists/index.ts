import { ListNode } from '../utils';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists) return null;

  const tmpArr = [];
  const head = new ListNode();
  let current = head;

  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      tmpArr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }

  const sortedTmpArr = tmpArr.sort((a, b) => a - b);

  sortedTmpArr.forEach((value) => {
    current.next = new ListNode(value);
    current = current.next;
  });
  return head.next;
}
