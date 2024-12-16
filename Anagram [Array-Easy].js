// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other,
// otherwise return false.
// An anagram is a string that contains the exact same characters as another string,
// but the order of the characters can be different.

// Solution
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // Solution I can't do: Use a sorting function then compare the two strings after sorting TC -> O(nlogn)
    // Hash: Create two has maps that contain the counts of characters from
    // both s & t then compare the frequencies of each character

    const hashS = new Map();
    const hashT = new Map();

    if (s.length !== t.length) {
      // if lengths aren't equal, return false
      return false;
    }

    for (let i = 0; i < s.length; i++) {
      hashS.set(s[i], (hashS.get(s[i]) || 0) + 1);
      hashT.set(t[i], (hashT.get(t[i]) || 0) + 1);
    }

    for (const key of hashS.keys()) {
      if (hashS.get(key) !== hashT.get(key)) {
        return false;
      }
    }
    console.log(hashS);
    console.log(hashT);
    return true;
  }
}

// TC: O(n + m) where n is the input size of s and m is the input size of t
// SC: O(n) where n is the combination of the input size of n & m

// Optimal Solution

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
  }
}

// TC: O(n + m) where n is the input size of s and m is the input size of t
// SC: O(1) since we have at most 26 different characters
