// 문자열 내 p와 y의 개수가 같은지 판별
function solution(s) {
  let count = 0;

  [...s].forEach((letter) => {
    if (letter === 'p' || letter === 'P') {
      count += 1;
    } else if (letter === 'y' || letter === 'Y') {
      count -= 1;
    }
  });
  return count ? false : true;
}

// another solution
function anotherSolution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

console.log(anotherSolution('pPoooyyY'));
