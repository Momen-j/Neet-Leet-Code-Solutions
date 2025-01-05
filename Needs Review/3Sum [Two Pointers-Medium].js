class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    // brute force: iterate across loop three times with one for loop starting at the beginning
    // another starting beginning + 1, and the other starting from beginning + 2
    // TC: O(n^3) SC: O(1) or O(n) depending on the sorting algorithm

    // sort input array before approaching problem
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;

      // if i greater than 0 & current element in array is equal to
      // the previous element than skip that iteration
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      // begin two pointer solution
      let l = i + 1;
      let r = nums.length - 1;

      // while left pointer less than right
      while (l < r) {
        // track the sum
        const sum = nums[i] + nums[l] + nums[r];

        // if sum is greater than 0, move right pointer left
        if (sum > 0) {
          r--;
        }

        // if sum is less than 0, move left pointer right
        else if (sum < 0) {
          l++;
        }

        // else push the array of all of the values that computed to 0
        // then move left pointer to the right
        else {
          result.push([nums[i], nums[l], nums[r]]);
          l++;

          // once left pointer moves, check if it is the same as the previous element
          // if so, move left pointer to the right one
          while (l < r && nums[l] == nums[l - 1]) {
            l++;
          }
        }
      }
    }
    return result;
  }
}
