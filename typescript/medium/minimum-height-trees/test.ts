const map = new Map<number, number[]>();

map.set(0, [...(map.get(0) ?? []), 1]);
map.set(0, [...(map.get(0) ?? []), 2]);

console.log(map);
