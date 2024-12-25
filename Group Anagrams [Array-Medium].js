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
        // allows us to access a certain element within the count array corresponding to a letter
        // a.charCodeAt(0) - a.charCodeAt(0) = Index 0
        // z.charCodeAt(0) - a.charCodeAt(0) = Index 25
        // covers all of the indicies of the array representing the alphabet and can easily update thru loop
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


// OLD SOLUTION
// TC: O(m * nlogn)  where m is the number of strings given and n is the average length of each string
// SC: O(m) where m is the number of strings given since we use a hashmap
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // for every element in array, use sort helper function then check if it exists as a key in hashmap
    // if so, then add the element into the value array for the key and if not, create a new key and add the element in
    // return array of values after
    let anagramMap = new Map();

    let sortString = (stringg) => {
      /*if (stringg === "") {
                return ""
            }*/

      return stringg.split("").sort().join("");
    };

    for (let i = 0; i < strs.length; i++) {
      let ogStr = strs[i];
      //console.log(ogStr)
      let sortedStr = sortString(ogStr);
      //console.log(sortedStr)
      if (anagramMap.has(sortedStr)) {
        anagramMap.get(sortedStr).push(ogStr);
      } else {
        anagramMap.set(sortedStr, [ogStr]);
      }
    }
    console.log(anagramMap);
    return [...anagramMap.values()];
  }
}
