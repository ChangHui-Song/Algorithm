function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities.forEach((city) => {
    console.log(cache);
    city = city.toLowerCase();
    if (cache.includes(city)) {
      cache.push(cache.splice(cache.indexOf(city), 1)[0]);
      answer++;
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
      cache.push(city);
    }
  });

  return answer;
}

function solution2(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities.forEach((city) => {
    console.log(cache);
    city = city.toLowerCase();
    if (cache.includes(city)) {
      // cache.push(cache.splice(cache.indexOf(city), 1));
      answer++;
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
      cache.push(city);
    }
  });

  return answer;
}

// console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']));
console.log(solution2(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']));
// console.log(
//   solution(2, [
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//     'SanFrancisco',
//     'Seoul',
//     'Rome',
//     'Paris',
//     'Jeju',
//     'NewYork',
//     'Rome',
//   ])
// );
// console.log(
//   solution(5, [
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//     'SanFrancisco',
//     'Seoul',
//     'Rome',
//     'Paris',
//     'Jeju',
//     'NewYork',
//     'Rome',
//   ])
// );
// console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
// console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
