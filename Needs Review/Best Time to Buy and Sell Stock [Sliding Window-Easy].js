/*

Best Time to Buy and Sell Stock
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

*/

// TC: O(n) SC: O(1)

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // init left and right pointer to represent buy (left pointer)
    // and sell days (right pointer)
    let l = 0;
    let r = 1;
    let maxP = 0;

    while (r < prices.length) {
      // is this a profitable transacation?
      if (prices[l] < prices[r]) {
        // profit = sell - buy
        let profit = prices[r] - prices[l];
        maxP = Math.max(maxP, profit);
      } else {
        // sell price is less than or equal to buy price
        // move left pointer to where right is b/c
        // it is a new low/minimum to potentially buy on
        l = r;
      }
      // right pointer always moves to the next day
      // regardless of conditional statment above
      r++;
    }
    return maxP;
  }
}

// BRUTE FORCE
// TC: O(n^2) SC: O(1)

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let res = 0;
    for (let i = 0; i < prices.length; i++) {
      let buy = prices[i];
      for (let j = i + 1; j < prices.length; j++) {
        let sell = prices[j];
        res = Math.max(res, sell - buy);
      }
    }
    return res;
  }
}
