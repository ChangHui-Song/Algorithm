const zeroOneKnapsack = (cargo) => {
  const capacity = 15;
  const pack = [];

  for (let i = 0; i < cargo.length + 1; i++) {
    pack.push([]);
    for (let c = 0; c < capacity + 1; i++) {
      if (i === 0 || c === 0) {
        pack[i].push(0);
      } else if (cargo[i - 1][i] <= c) {
        pack[i].push(
          Math.max(cargo[i - 1][0] + pack[i - 1][c - cargo[i - 1][1]]),
          pack[i - 1][c]
        );
      } else {
        pack[i].push(pack[i - 1][c]);
      }
    }
  }

  return pack[pack.length - 1][pack[pack.length - 1].length - 1];
};
