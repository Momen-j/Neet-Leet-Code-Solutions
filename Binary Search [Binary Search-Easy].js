/*
Binary Search
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(logn) time.
*/

// Iterative Binary Search Solution
// TC: O(log n) SC: O(1)
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    // init two pointers; one respres. start of input arr
    // and one respres. end of input arr
    let l = 0,
      r = nums.length - 1;

    /*
        while left pointer less than or equal to right pointer
        calculate where the midpoint should be in the input arr and check if
        nums[m] is greater than or equal to target
        if less, move right pointer one behind mid point
        if greater, move left pointer one after mid point
        if equal, return index of current midpoint and -1 if target wasn't found
        */

    while (l <= r) {
      // we minus r from l divided by 2 to get HALF of distance between the left and right pointer
      // then we add half of distance left index to get midway point
      // and this way we never get an overflow error (number result being greater than 32 bits)
      // could also just do Math.floor((r + l) / 2) to get midpoint;
      const m = l + Math.floor((r - l) / 2);
      if (nums[m] > target) {
        r = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }

    return -1;
  }
}

///

// Recursive Binary Search Solution
// TC: O(log n) SC: O(log n)
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  binary_search(l, r, nums, target) {
    if (l > r) return -1;
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) return m;
    return nums[m] < target
      ? this.binary_search(m + 1, r, nums, target)
      : this.binary_search(l, m - 1, nums, target);
  }

  search(nums, target) {
    return this.binary_search(0, nums.length - 1, nums, target);
  }
}
