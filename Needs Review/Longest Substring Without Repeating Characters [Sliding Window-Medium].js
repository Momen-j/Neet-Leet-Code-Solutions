/*

Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

*/

// TC: O(n) SC: O(m) where n is the size of the input array and m is the number of unique chars in the string

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let l = 0;
    let res = 0;

    // right pointer continuously changes as we iterate
    for (let r = 0; r < s.length; r++) {
      // while s[r] is in our set (aka dupe)
      // then we update our window by incrementing left pointer
      while (charSet.has(s[r])) {
        charSet.delete(s[l]);
        l++;
      }
      // once there are no more dupes
      // add right value into set
      charSet.add(s[r]);

      // caluculate max length
      // right pointer minus left pointer plus 1 (due to zero-index)
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}

///

// BRUTE FORCE

// TC: O(n * m) SC: O(m)

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      let charSet = new Set();
      for (let j = i; j < s.length; j++) {
        if (charSet.has(s[j])) {
          break;
        }
        charSet.add(s[j]);
      }
      res = Math.max(res, charSet.size);
    }
    return res;
  }
}
