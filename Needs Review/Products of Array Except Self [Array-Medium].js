// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Brute Force
// TC: O(n^2)
// SC: O(1)

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n);

    for (let i = 0; i < n; i++) {
      let prod = 1;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          prod *= nums[j];
        }
      }
      res[i] = prod;
    }
    return res;
  }
}

//

// Prefix & Suffix
// TC: O(n)
// SC: O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n);
    const pref = new Array(n);
    const suff = new Array(n);

    pref[0] = 1;
    suff[n - 1] = 1;
    for (let i = 1; i < n; i++) {
      pref[i] = nums[i - 1] * pref[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
      suff[i] = nums[i + 1] * suff[i + 1];
    }
    for (let i = 0; i < n; i++) {
      res[i] = pref[i] * suff[i];
    }
    return res;
  }
}

// OPTIMAL SOLUTION
// Prefix & Suffix Solution
// TC: O(n)
// SC: O(1) since the output array is excluded from space analysis.
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= postfix;
      postfix *= nums[i];
    }
    return res;
  }
}
