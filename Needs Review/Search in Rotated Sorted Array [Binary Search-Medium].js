/*

Search in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

*/

// TC: O(logn) SC: O(1)

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    // bf: for loop that iterates thru nums and checks if nums[i] === target, if so return index

    // init binary search vars
    let l = 0,
      r = nums.length - 1;

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      // check if num[mid] === target
      if (nums[mid] === target) {
        return mid;
      }

      // check if mid is in left sorted portion
      if (nums[l] <= nums[mid]) {
        // if target is greater than middle value
        // or target less than left value
        // move left pointer one past mid pointer
        // search right sorted portion
        if (target > nums[mid] || target < nums[l]) {
          l = mid + 1;
        }

        // search left sorted portion
        else {
          // target is less than middle and greater than left
          // move right pointer one before mid pointer
          r = mid - 1;
        }
      }

      // check if mid is in right sorted portion
      else {
        // if target is less than middle value
        // or target greater than right value
        // move right pointer one before mid pointer to look thru left portion
        if (target < nums[mid] || target > nums[r]) {
          r = mid - 1;
        }

        // else search right
        // target is greater than mid value and target is less than right
        else {
          l = mid + 1;
        }
      }
    }

    return -1;
  }
}
