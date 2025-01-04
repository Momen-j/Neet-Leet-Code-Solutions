// Two Integer Sum II
// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// TC: O(n) SC: O(1)

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    // brute force: loop on every element in numbers and for every element
    // that isn't itself, check if the two elements added together will equal target

    /*
        init two vars for left and right pointers
        SINCE WE ARE DEALING WITH A SORTED ARRAY
        if sum of left and right equals target, then return true
        if sum is greater than target, we move the right pointer to the left 
        if sum is less than target, move left pointer right
        */

    let l = 0,
      r = numbers.length - 1;
    let sum = 0;

    while (l < r) {
      if (numbers[l] + numbers[r] < target) {
        l++;
      }

      if (numbers[l] + numbers[r] > target) {
        r--;
      }

      if (numbers[l] + numbers[r] === target) {
        // we add 1 at the end since the solution needs to be
        // 1-index based
        return [l + 1, r + 1];
      }
    }

    // if no pair is found
    return false;
  }
}
