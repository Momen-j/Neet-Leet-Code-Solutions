// Contains Duplicate
// Given an integer array nums, return true if any value appears
// more than once in the array, otherwise return false.

// Solution
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // Brute Force: for loop that tracks current indicies, then a for loop within the first one that tracks the indicies after the current indicies O(n2)
    // Set Solution: for loop that tracks current indicies and checks if the value exists within a set. If so, return false and if not, continue loop and if entire loop is
    // iterated through, return true
    const trackSet = new Set([]);

    for (let i = 0; i < nums.length; i++) {
      // check if nums[i] exists within the set
      if (trackSet.has(nums[i])) {
        return true;
      } else {
        // add nums[i] into set
        trackSet.add(nums[i]);
      }
    }
    return false;
  }
}

// TC: O(n)
// SC: O(n)
// n represents the input size of nums
