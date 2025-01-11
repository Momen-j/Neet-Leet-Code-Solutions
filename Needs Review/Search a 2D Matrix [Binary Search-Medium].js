/*

Search a 2D Matrix
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

*/

// Optimal Solution
// TC: O(logm + logn)

class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    // init vars to represent row and column # in matrix
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    // init top & bottom rows
    let top = 0;
    let bot = ROWS - 1;
    while (top <= bot) {
      const row = Math.floor((top + bot) / 2);
      if (target > matrix[row][COLS - 1]) {
        top = row + 1;
      } else if (target < matrix[row][0]) {
        bot = row - 1;
      } else {
        break;
      }
    }

    if (!(top <= bot)) {
      return false;
    }

    const row = Math.floor((top + bot) / 2);
    let l = 0;
    let r = COLS - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (target > matrix[row][m]) {
        l = m + 1;
      } else if (target < matrix[row][m]) {
        r = m - 1;
      } else {
        return true;
      }
    }
    return false;
  }
}

//
// Brute Force Solution
// TC: O(m * n)

class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] == target) {
          return true;
        }
      }
    }
    return false;
  }
}
