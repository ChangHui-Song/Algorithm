export function groupAnagrams(strs: string[]): string[][] {
  const anagrams = {};

  for (let str of strs) {
    const key = str.split('').sort().join('');

    if (!anagrams[key]) anagrams[key] = [];
    anagrams[key].push(str);
  }

  return Object.values(anagrams);
}
