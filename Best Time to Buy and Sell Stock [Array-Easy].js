// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Optimal Solution
// TC: O(n)
// SC: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // if the current price is less than the previously set buy price, update buy price to current price
    // to ensure we buy at the lowest price possible
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }

    // every loop, check if current profit is greater than current price - buy price
    // replace profit with whichever is greater
    profit = Math.max(profit, prices[i] - buyPrice);
  }

  return profit;
};

///

// Brute Force Solution
// TC: O(n^2)
// SC: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // profit = prices[i + j] - prices[i]
  // inputs are a list of nums and the output is the result of prices[i + j] - prices[i]
  // we need to minus prices[i + j] from prices[i]

  // brute force: iterate thru each element in prices then take that element and iterate thru the list once more
  // subtracting the element in the second loop from the element in the first loop and check if it is greater than
  // a variable keeping track of the largest number we have gotten thru so far
  // TC: O(n^2)
  // SC: O(1)
  // how to do in one loop?

  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }

  if (maxProfit < 0) {
    return 0;
  } else {
    return maxProfit;
  }
};
