// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// BUCKET SORT SOLUTION
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    // IMPORTANT COMMENT
    // Trick being used in the bucket sort solution is one that
    // sets up the indicies of an array to be the count or key in this case
    // and the values of the array are the numbers associated with those counts
    // Essentially allows you to set up an array like a hash map

    const count = new Map();

    // create an array of empty arrays that will track the count of numbers in nums
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    // iterates thru nums and counts occurrences using count map
    for (const n of nums) {
      count.set(n, (count.get(n) || 0) + 1);
    }

    // iterates thru key-value pairs in count and pushes them into
    // the freq array, using count as a refernce for the indices
    for (const [n, c] of count.entries()) {
      freq[c].push(parseInt(n));
    }

    // setup return array
    const res = [];

    // iterates thru freq array in descending order (to capture greatest counts first)
    // then within each value array, push values into res if they exist and check if res.length is equal to k
    // if so, return res
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}

// TC: O(n) where n is the size of nums
// SC: O(n) where n is the size of nums

/////

// HEAP SOLUTION
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = new Map();
    for (const num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
    }

    const heap = new MinPriorityQueue((x) => x[1]);
    for (const [num, cnt] of count.entries()) {
      heap.enqueue([num, cnt]);
      if (heap.size() > k) {
        console.log(heap.toArray());
        heap.dequeue();
      }
    }

    const res = [];
    for (let i = 0; i < k; i++) {
      const [num, cnt] = heap.dequeue();
      res.push(num);
    }
    return res;
  }
}

// TC: O(nlogk) where n is the length of the array and k is the number of top frequent elements.
// SC: O(n+k) where n is the length of the array and k is the number of top frequent elements.
