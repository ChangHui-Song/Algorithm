class BinaryHeap {
  constructor() {
    this.items = [null];
  }

  length() {
    return this.items.length - 1;
  }

  percolateUp() {
    let i = this.length();
    let parent = Math.floor(i / 2);

    while (parent > 0) {
      if (this.items[i] < this.items[parent]) {
        const tmp = this.items[parent];
        this.items[parent] = this.items[i];
        this.items[i] = tmp;
      }
      i = parent;
      parent = Math.floor(i / 2);
    }
  }

  insert(k) {
    this.items.push(k);
    this.percolateUp();
  }

  percolateDown(index) {
    const left = index * 2;
    const right = index * 2 + 1;
    let smallest = index;

    if (left <= this.length() && this.items[left] < this.items[smallest]) {
      smallest = left;
    }

    if (right <= this.length() && this.items[right] < this.items[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      const tmp = this.items[index];
      this.items[index] = this.items[smallest];
      this.items[smallest] = tmp;
      this.percolateDown(smallest);
    }
  }

  extract() {
    const extracted = this.items[1];
    this.items[1] = this.items[this.length()];
    this.items.pop();
    this.percolateDown(1);
    return extracted;
  }
}

const heap = new BinaryHeap();

heap.insert(1);
console.log(heap.items);
heap.insert(3);
console.log(heap.items);
heap.insert(5);
console.log(heap.items);
heap.insert(2);
console.log(heap.items);
heap.insert(6);
console.log(heap.items);
heap.insert(10);
console.log(heap.items);
heap.insert(7);
console.log(heap.items);
heap.insert(8);
console.log(heap.items);
heap.extract();
console.log(heap.items);
