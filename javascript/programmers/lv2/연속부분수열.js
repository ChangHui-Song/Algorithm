function solution(elements) {
  let elementset = new Set();

  for (let i = 0; i < elements.length; i++) {
    let cur = 0;
    for (let j = 0; j < elements.length; j++) {
      cur += elements[(i + j) % elements.length];
      elementset.add(cur);
    }
  }
  return elementset.size;
}

console.log(solution([7, 9, 1, 1, 4]));
