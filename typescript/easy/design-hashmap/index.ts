export class MyListNode {
  key: number;
  value: number;
  next: MyListNode | null;
  constructor(key: number, value: number, next?: MyListNode) {
    this.key = key;
    this.value = value;
    this.next = next ? next : null;
  }
}

export class MyHashMap {
  private size: number;
  private table: Array<MyListNode | null>;
  constructor() {
    this.size = 5;
    this.table = new Array(this.size);
  }

  put(key: number, value: number): void {
    const index = key % this.size;

    if (!this.table[index]) {
      this.table[index] = new MyListNode(key, value);
      return;
    }

    let node = this.table[index];
    while (node.next !== null && node.key !== key) {
      node = node.next;
    }

    if (node.key === key) {
      node.value = value;
      return;
    }
    node.next = new MyListNode(key, value);
  }

  get(key: number): number {
    const index = key % this.size;

    if (!this.table[index]) return -1;

    let node = this.table[index];
    while (node) {
      if (node.key === key) return node.value;
      node = node.next;
    }
    return -1;
  }

  remove(key: number): void {
    const index = key % this.size;
    if (!this.table[index]) return;

    let node = this.table[index];
    if (node.key === key) {
      this.table[index] = node.next;
      return;
    }

    let prev = node;
    while (node) {
      if (node.key === key) {
        prev.next = node.next;
        return;
      }
      prev = node;
      node = node.next;
    }
  }
}
