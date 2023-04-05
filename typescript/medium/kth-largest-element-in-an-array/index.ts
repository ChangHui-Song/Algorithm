// class MaxHeap {
//   nums: (number | null)[];
//   constructor() {
//     this.nums = [null];
//   }

//   length(): number {
//     return this.nums.length - 1;
//   }

//   percolateUp() {
//     let i = this.length();
//     let parent = Math.floor(i / 2);

//     while (parent > 0) {
//       if (this.nums[parent] < this.nums[i]) {
//         const tmp = this.nums[parent];
//         this.nums[parent] = this.nums[i];
//         this.nums[i] = tmp;
//       }
//       i = parent;
//       parent = Math.floor(i / 2);
//     }
//   }

//   insert(k: number) {
//     this.nums.push(k);
//     this.percolateUp();
//   }

//   percolateDown(index: number) {
//     const left = index * 2;
//     const right = index * 2 + 1;
//     let maximum = index;

//     if (left < this.length() && this.nums[left] > this.nums[maximum]) {
//       maximum = left;
//     }

//     if (right < this.length() && this.nums[right] > this.nums[maximum]) {
//       maximum = right;
//     }

//     if (maximum !== index) {
//       const tmp = this.nums[maximum];
//       this.nums[maximum] = this.nums[index];
//       this.nums[index] = tmp;
//       this.percolateDown(maximum);
//     }
//   }

//   extract(): number {
//     const extracted = this.nums[1];
//     this.nums[1] = this.nums.pop();
//     this.percolateDown(1);
//     return extracted;
//   }
// }

// export function findKthLargest(nums: number[], k: number): number {
//   const heap = new MaxHeap();

//   for (let num of nums) {
//     heap.insert(num);
//   }
//   for (let i = 1; i < k; i++) {
//     heap.extract();
//   }
//   return heap.extract();
// }

export function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}
