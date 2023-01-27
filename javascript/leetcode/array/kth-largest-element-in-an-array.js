class MaxHeap {
  constructor() {
    this.nums = [null];
  }

  length() {
    return this.nums.length - 1;
  }

  percolateUp() {
    let i = this.length();
    let parent = Math.floor(i / 2);

    while (parent > 0) {
      if (this.nums[parent] < this.nums[i]) {
        const tmp = this.nums[parent];
        this.nums[parent] = this.nums[i];
        this.nums[i] = tmp;
      }
      i = parent;
      parent = Math.floor(i / 2);
    }
  }

  insert(k) {
    this.nums.push(k);
    this.percolateUp();
  }

  percolateDown(index) {
    const left = index * 2;
    const right = index * 2 + 1;
    let maximum = index;

    if (left < this.length() && this.nums[left] > this.nums[maximum]) {
      maximum = left;
    }

    if (right < this.length() && this.nums[right] > this.nums[maximum]) {
      maximum = right;
    }

    if (maximum !== index) {
      const tmp = this.nums[maximum];
      this.nums[maximum] = this.nums[index];
      this.nums[index] = tmp;
      this.percolateDown(maximum);
    }
  }

  extract() {
    const extracted = this.nums[1];
    this.nums[1] = this.nums.pop();
    this.percolateDown(1);
    return extracted;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap();

  for (let num of nums) {
    heap.insert(num);
  }
  for (let i = 1; i < k; i++) {
    heap.extract();
  }
  return heap.extract();
};

console.log(findKthLargest([5, 2, 4, 1, 3, 6, 0], 2));
