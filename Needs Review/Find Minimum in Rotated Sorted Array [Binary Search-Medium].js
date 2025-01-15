/*

Find Minimum in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. 
For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.

Notice that rotating the array 4 times moves the last four elements of the array to the beginning. 
Rotating the array 6 times produces the original array.

Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

*/

// TC: O(logn) SC: O(1)

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let l = 0,
      r = nums.length - 1,
      res = nums[0];

    while (l <= r) {
      // check if whatever left pointer currently is and if it is less
      // than that means the array is sorted
      if (nums[l] <= nums[r]) {
        res = Math.min(res, nums[l]);
        break;
      }

      let m = l + Math.floor((r - l) / 2);
      res = Math.min(res, nums[m]);

      // is nums[m] apart of the left sorted portion?
      if (nums[m] >= nums[l]) {
        // search the right sorted portion if so
        l = m + 1;
      } else {
        // else search the left sorted portion
        r = m - 1;
      }
    }
    return res;
  }
}
