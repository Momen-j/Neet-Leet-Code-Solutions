/*

Find the Duplicate Number

You are given an array of integers nums containing n + 1 integers. 
Each integer in nums is in the range [1, n] inclusive.

Every integer appears exactly once, except for one integer which appears two or more times. 
Return the integer that appears more than once.

Input: nums = [1,2,3,2,2]

Output: 2

*/

// TC: O(n) SC: O(1)
// TRICK FOR THIS PROBLEM:
// Treat the array like a linkedlist where the index is the value and the elements within the array are next pointers

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    // init slow and fast pointers to setup Floyd's Algo
    let slow = 0;
    let fast = 0;

    // we loop until slow & fast pointers intersect
    // however, they intersect initially (slow & fast both eq 0)
    // Essentially a do-while loop
    while (true) {
      slow = nums[slow];

      // fast pointer will never point out of bounds based off of the
      // problem conditions
      fast = nums[nums[fast]]; // fast.next.next essentially

      if (slow === fast) {
        break;
      }
    }

    // PHASE 2 OF ALGO

    // set slow2 to be the beginning of list
    let slow2 = 0;

    // increment both slow and slow2 until they intersect
    while (true) {
      slow = nums[slow];
      slow2 = nums[slow2];

      if (slow === slow2) {
        // the index that slow and slow2 intersect at
        // IS the duplicate number
        return slow;
      }
    }
  }
}
