/*

Daily Temperatures
You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. 
If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

*/

// TC: O(n) SC: O(n)
class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    // brute force: for loop that iterates across each element
    // and for each element check if there is a value greater than itself and if not go to next iteration
    // count how many iterations it took then move onto next element

    const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [stackT, stackInd] = stack.pop();
        res[stackInd] = i - stackInd;
      }
      stack.push([t, i]);
    }
    return res;
  }
}
