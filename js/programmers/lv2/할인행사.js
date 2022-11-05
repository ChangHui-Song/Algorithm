function solution(want, number, discount) {
  let answer = 0;
  const wants = {};
  const discountObj = {};

  want.forEach((food, idx) => {
    wants[food] = number[idx];
    discountObj[food] = 0;
  });

  for (let i = 0; i < discount.length; i++) {
    if (discountObj[discount[i]] >= 0) discountObj[discount[i]]++;
    if (JSON.stringify(wants) === JSON.stringify(discountObj)) answer++;
    if (i >= 9 && discountObj[discount[i - 9]]) discountObj[discount[i - 9]]--;
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
console.log(
  solution(
    ['apple'],
    [10],
    ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana']
  )
);
