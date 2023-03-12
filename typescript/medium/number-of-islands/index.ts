export function numIslands(grid: string[][]): number {
  let answer = 0;

  const dfs = (row: number, col: number): void => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] !== '1'
    ) {
      return;
    }

    grid[row][col] = '0';

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        answer++;
      }
    }
  }
  return answer;
}
