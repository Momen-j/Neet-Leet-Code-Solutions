/*
Trapping Rain Water
You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.
*/

// Two Pointer Solution
// TC: O(n) SC: O(1)
class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    // if height array is empty then return 0 and stop algorithm
    if (!height || height.length === 0) {
      return 0;
    }

    // init left and right pointers
    // init leftmax and rightmax to keep track of the max height the left/right
    // pointer have become
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;

    // the formula to calculate area of water capture at a certain index is
    // min(Max(heights[l]), Max(heights[l])) - heights[i]
    // since the lower height is the bottleneck, we are focused on
    // calculating area around that
    while (l < r) {
      if (leftMax < rightMax) {
        l++;
        leftMax = Math.max(leftMax, height[l]);
        res += leftMax - height[l];
      } else {
        r--;
        rightMax = Math.max(rightMax, height[r]);
        res += rightMax - height[r];
      }
    }
    return res;
  }
}

///

//! BRUTE FORCE SOLUTION
class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    if (!height.length) {
      return 0;
    }
    let n = height.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
      let leftMax = height[i];
      let rightMax = height[i];

      for (let j = 0; j < i; j++) {
        leftMax = Math.max(leftMax, height[j]);
      }
      for (let j = i + 1; j < n; j++) {
        rightMax = Math.max(rightMax, height[j]);
      }

      res += Math.min(leftMax, rightMax) - height[i];
    }
    return res;
  }
}
