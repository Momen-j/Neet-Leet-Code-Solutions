// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.
// Please implement encode and decode

// My Solution
// TC: O(m) for both functions
// SC: O(1) for both functions
// Where m is the sum of lengths of all the strings and n is the number of strings.
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // encode each item in strs by adding a number to the beginning and a #
    // then add them all together into one string and return
    // the number acts as a way to keep track of how many elements to iterate thru

    let concatStr = "";

    for (const str of strs) {
      let newStr = `${str.length}#${str}`;
      concatStr = concatStr + newStr;
    }

    return concatStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // using the number and # before every string, take that number and iterate
    // until you reach the end and return the string in the result array
    let currentStr = "";
    let res = [];

    for (let l = 1; l < str.length; l++) {
      if (str[l] === "#") {
        continue;
      }

      if (isNaN(parseInt(str[l]))) {
        currentStr = currentStr + str[l];
      } else {
        res.push(currentStr);
        currentStr = "";
      }
    }

    if (currentStr) {
      res.push(currentStr);
    }

    return res;
  }
}

////

// OPTIMAL SOLUTION
// TC: O(m) for both functions
// SC: O(1) for both functions
// Where m is the sum of lengths of all the strings and n is the number of strings.

// Note: Substring has a TC of O(n) so TC could really be O(m + n)
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
