// Two Sum
// Given an array of integers nums and an integer target, 
// return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy 
// the condition.

// Return the answer with the smaller index first.

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // given an arr nums return the indicies [i,j] of nums that equal to target

    // Brute Force: for loop that iterates on nums[i] and within that for loop is another for loop
    // iterating on nums[j] where nums[j] is not equal to nums[i] then add nums[i] + nums[j] together
    // until the target combination is found, then return [i, j]
    // TC: O(n^2)

    // if equation to find target is nums[i] + nums[j] == target, we could rearrange the equation to be
    // difference == target - nums[i]
    // we iterate thru nums and check if the difference is in the hash map. if not add it in and check every iteration
    // TC: O(n) due to only one pass thru the hash map
    // SC: O(n) due to using a hashmap

    const differenceMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];

      // check to see if difference is in difference map
      // if not, set the key value pair to be difference : index
      if (differenceMap.has(nums[i])) {
        return [differenceMap.get(nums[i]), i];
      } else {
        differenceMap.set(difference, i);
      }
    }
  }
}

// TC: O(n)
// SC: O(n)
// n represents the input size of nums
