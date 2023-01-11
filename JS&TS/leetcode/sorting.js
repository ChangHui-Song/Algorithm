const swap = (left, right) => [right, left];

// 버블 정렬
// n 번의 라운드 동안 연속된 두 개의 아이템이 정렬되어 있지 않은 경우 자리를 바꾼다.
const bubblesort = (lst) => {
  for (let i = 1; i < lst.length; i++) {
    for (let j = 0; j < lst.length - 1; j++) {
      if (lst[j] > lst[j + 1]) {
        [lst[j], lst[j + 1]] = swap(lst[j], lst[j + 1]);
      }
    }
  }
};

// 퀵 정렬
// 가장 오른쪽을 피봇(기준점)으로 잡는다.
// left, right 포인터는 가장 왼쪽에서 시작한다.
// right 값이 피봇보다 작으면 left와 right를 바꾼다.
// left와 right의 값이 바뀌었으면 left는 그대로 두고, 아니라면 둘다 한칸 씩 이동한다.
// 이 과정을 절반 씩 나누면서 반복한다.
const quicksort = (lst, lo, hi) => {
  const partition = (lo, hi) => {
    const pivot = lst[hi];
    let left = lo;
    for (let right = lo; right < hi; right++) {
      if (lst[right] < pivot) {
        [lst[left], lst[right]] = swap(lst[left], lst[right]);
        left++;
      }
    }
    [lst[left], lst[hi]] = swap(lst[left], lst[hi]);
    return left;
  };

  if (lo < hi) {
    const pivot = partition(lo, hi);
    quicksort(lst, lo, pivot - 1);
    quicksort(lst, pivot + 1, hi);
  }
};

const lst = [2, 8, 7, 1, 3, 5, 6, 4];
bubblesort(lst, 0, lst.length - 1);
console.log(lst);
