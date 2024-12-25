// REVIEW THIS QUESTION MORE

// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = new Map(); // mapping charCount to list of anagrams
    for (let s of strs) {
      const count = new Array(26).fill(0); // covers lower case a - z
      for (let c of s) {
        // allows us to access a
        // certain element within the count array corresponding to a letter
        // a.charCodeAt(0) - a.charCodeAt(0) = 0
        // z.charCodeAt(0) - a.charCodeAt(0) = 25
        // covers all of the indicies of the array and can easily update thru loop
        count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }

      // group array letter combination into a string
      const key = count.join(",");

      // check if map has the key
      // if not, add key to map with empty array
      if (!res.has(key)) {
        res.set(key, []);
      }

      // if key exists, push the string into the value array of the key
      res.get(key).push(s);
    }
    return Array.from(res.values());
  }
}

// TC: O(m * n) where m is the number of strings given and n is the average length of each string
// SC: O(m) where m is the number of strings given since we use a hashmap
