/*
Generate Parentheses
You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.
*/

// TC: O(4^n/sqrt(n)) SC: O(n)

class Solution {
  /**
   * @param {number} openN
   * @param {number} closeN
   * @param {number} n
   * @param {string[]} res
   * @param {string} stack
   */

  // only add open parenthesis if open count < n
  // only add a closing parentheses is closed < open
  // valid if open == closed == n

  backtrack(openN, closedN, n, res, stack) {
    if (openN === closedN && openN === n) {
      res.push(stack);
      return;
    }

    if (openN < n) {
      this.backtrack(openN + 1, closedN, n, res, stack + "(");
    }

    if (closedN < openN) {
      this.backtrack(openN, closedN + 1, n, res, stack + ")");
    }
  }

  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const res = [];
    this.backtrack(0, 0, n, res, "");
    return res;
  }
}
