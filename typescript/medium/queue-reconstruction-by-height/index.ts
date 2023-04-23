export function reconstructQueue(people: number[][]): number[][] {
  const sortedPeople = people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  const result: number[][] = [];

  for (let i = 0; i < sortedPeople.length; i++) {
    console.log(result, sortedPeople[i][1], sortedPeople[i]);
    result.splice(sortedPeople[i][1], 0, sortedPeople[i]);
  }

  return result;
}
