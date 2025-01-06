// Container With Most Water
// You are given an integer array heights where heights[i] represents the height of the ith bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.
// TC: O(n) SC: O(1)

// TWO POINTER SOLUTION
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    // init a left and right pointer where we check if the
    // area computed by Math.min(heights[r], height[l]) * (r - l)
    // against a var that will be the current max area
    // this will iterate while l < r
    let resultArea = 0;
    let l = 0,
      r = heights.length;

    while (l < r) {
      let currentArea = Math.min(heights[r], heights[l]) * (r - l);

      // set current area to result area if greater
      if (currentArea > resultArea) {
        resultArea = currentArea;
      }

      /*
        in this problem, it is only necessary to move the pointer with 
        the smaller value since the height of the bucket depends on the
        smallest bar used
        */
      if (heights[l] <= heights[r]) {
        l++;
      } else {
        r--;
      }
    }

    return resultArea;
  }
}

///

//! BRUTE FORCE SOLUTION
// TC: O(n^2) SC: O(1)
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let res = 0;

    // start from left of heights array then set up another for loop that is
    // one after and continue finding the current max Area every loop
    for (let l = 0; l < heights.length; l++) {
      for (let r = l + 1; r < heights.length; r++) {
        let area = (r - l) * Math.min(heights[l], heights[r]);
        res = Math.max(res, area);
      }
    }
    return res;
  }
}
