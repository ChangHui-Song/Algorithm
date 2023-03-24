export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const convertArrayToList = (array: number[]): ListNode | null => {
  if (!array) return null;

  const head = new ListNode(-1);
  let prev = head;

  for (let i = 0; i < array.length; i++) {
    prev.next = new ListNode(array[i]);
    prev = prev.next;
  }

  return head.next;
};

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const convertArrayToTree = (
  array: (number | null)[]
): TreeNode | null => {
  if (!array) return null;

  const root = new TreeNode(array[0]);
  let index = 0;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const subRoot = queue.shift();
    if (array[2 * index + 1]) {
      subRoot.left = new TreeNode(array[2 * index + 1]);
      queue.push(subRoot.left);
    }
    if (array[2 * index + 2]) {
      subRoot.right = new TreeNode(array[2 * index + 2]);
      queue.push(subRoot.right);
    }
    index++;
  }

  return root;
};

export function expectAnyOrder<T>(arr: T[][]): T[][] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = expect.arrayContaining(arr[i]);
  }
  return arr;
}
