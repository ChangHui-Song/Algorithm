export function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    console.log(row, col);
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    }
  }

  return false;
}
