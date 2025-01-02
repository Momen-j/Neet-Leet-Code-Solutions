// Longest Consecutive Sequence
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
// The elements do not have to be consecutive in the original array.

// Hash Set Solution
// TC: O(n) SC: O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // init vars to repres. input arr as a set DS and longest as a tracker var
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
      // check if its the start of a sequence
      if (!numSet.has(num - 1)) {
        let length = 1;
        // keep getting consecutive numbers in numSet
        while (numSet.has(num + length)) {
          // if a consecututive number does exist, add 1 to length
          length++;
        }

        // throughout any of the iterations, we could have found our
        // longest seq. so we set longest to the greater of vars
        // longest & length
        longest = Math.max(longest, length);
      }
    }
    return longest;
  }
}

// BRUTE FORCE SOLUTION
// TC: O(n^2)
// SC: O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let res = 0;
    const store = new Set(nums);

    for (let num of nums) {
      let streak = 0,
        curr = num;
      while (store.has(curr)) {
        streak++;
        curr++;
      }
      res = Math.max(res, streak);
    }
    return res;
  }
}

// SORTING SOLUTION
// TC: O(nlogn) SC: O(1)
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    nums.sort((a, b) => a - b);

    let res = 0,
      curr = nums[0],
      streak = 0,
      i = 0;

    while (i < nums.length) {
      if (curr !== nums[i]) {
        curr = nums[i];
        streak = 0;
      }
      while (i < nums.length && nums[i] === curr) {
        i++;
      }
      streak++;
      curr++;
      res = Math.max(res, streak);
    }
    return res;
  }
}
