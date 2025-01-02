// Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements
// that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

// TC: O(m + n) m = # of elements in nums1, n = # of elements in nums2
// SC: O(1)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // midx points to last non-zero part of nums1
  // nidx: Points to the last element in nums2 (i.e., n - 1).
  // right: Points to the last index in nums1 (i.e., m + n - 1).
  let midx = m - 1;
  let nidx = n - 1;
  let right = m + n - 1;

  // while n index is non-neg. (nums2 length will always be less than nums1)
  while (nidx >= 0) {
    // check if midx is non-neg. and the element @ nums1[midx] is greater than nums2[nidx]
    if (midx >= 0 && nums1[midx] > nums2[nidx]) {
      // make right most element not iterated upon yet in nums1 into current element @ nums1[midx]
      nums1[right] = nums1[midx];
      midx--;
    } else {
      // make right most element not iterated upon yet in nums1 into current element @ nums2[nidx]
      nums1[right] = nums2[nidx];
      nidx--;
    }

    // minus one from right to move onto next position in nums1
    right--;
  }
};
