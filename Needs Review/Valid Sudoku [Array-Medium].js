// Valid Sudoku
// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// TC: O(n^2) SC: O(n^2)
class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // cols & rows will have the row/col # as the key and a SET of values that appear in them
    const cols = new Map();
    const rows = new Map();
    // key for squares = (r/3, c/3) to represent square indicies
    const squares = new Map();

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === ".") continue;
        const squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

        // if the row/col # & square index using squareKey exists in respective maps and
        // the value of the board we are looping on exists within the value SET of a given row/col # or square index
        if (
          (rows.get(r) && rows.get(r).has(board[r][c])) ||
          (cols.get(c) && cols.get(c).has(board[r][c])) ||
          (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))
        ) {
          return false;
        }

        // if no dupes are detected, add a new key into each map with an
        // empty set as the value paramater
        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        if (!squares.has(squareKey)) squares.set(squareKey, new Set());

        // then add the current board value into each map to continue tracking dupes
        rows.get(r).add(board[r][c]);
        cols.get(c).add(board[r][c]);
        squares.get(squareKey).add(board[r][c]);
      }
    }

    return true;
  }
}
