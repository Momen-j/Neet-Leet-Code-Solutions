/*

Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. 
You can choose up to k characters of the string and replace them with any other uppercase English character.


After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

*/

// TC: O(n) SC: O(m) where n is the length of the given string and m is the number of unique characters in the string.

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let res = 0;
    let count = new Map();

    // we set a max freq var bc we don't have to change
    // the value of this variable until a greater freq appears
    let l = 0,
      maxf = 0;
    for (let r = 0; r < s.length; r++) {
      // increment count of character in hash map or create entry
      count.set(s[r], (count.get(s[r]) || 0) + 1);

      // max freq is either current max or the value of the character
      // we just added to the map
      maxf = Math.max(maxf, count.get(s[r]));

      // while length of the window minus max freq value is greater than k
      // shift left pointer
      while (r - l + 1 - maxf > k) {
        // get left value in hashmap and minus one
        count.set(s[l], count.get(s[l]) - 1);

        // increment left pointer one
        l++;
      }
      // size of window can be calculated by
      // right minus left plus one
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}

///

// BRUTE FORCE
// TC: O(n^2) SC: O(m) where n is the length of the given string and m is the number of unique characters in the string.

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      let count = new Map();
      let maxf = 0;
      for (let j = i; j < s.length; j++) {
        count.set(s[j], (count.get(s[j]) || 0) + 1);
        maxf = Math.max(maxf, count.get(s[j]));
        if (j - i + 1 - maxf <= k) {
          res = Math.max(res, j - i + 1);
        }
      }
    }
    return res;
  }
}
