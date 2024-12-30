// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward.
//  It is also case-insensitive and ignores all non-alphanumeric characters.

// Reverse String Solution
// TC: O(n)
// SC: O(n)
class Solution {
  /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isAlphanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isPalindrome(s) {
    // brute force: create a copy of the string, reverse it, then check for equality
    // TC would be O(n) using O(n) space b/c a new string is created
    // could use this s.split('').reverse().join('') to get reversed string

    // iterate thru each character in s and check if it is alphanumeric
    // if so, make the character lower case and add to newStr
    // newStr is the clean version of s without non alphanumeric chars
    let newStr = "";
    for (let c of s) {
      if (this.isAlphanumeric(c)) {
        newStr += c.toLowerCase();
      }
    }

    // return boolean representing whether or not newStr is equal to
    // the reversed version of itself
    return newStr === newStr.split("").reverse().join("");
  }
}

//

// Optimal Solution
// TC: O(n)
// SC: O(1)
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    // left pointer begins on the left-most side, hence l = 0
    // right pointer begins on the right-most side, hence r = s.length-1
    let l = 0,
      r = s.length - 1;

    // while the left pointer is less than the right
    while (l < r) {
      // while l is less than r & the current char where the l pointer
      // is is not alphanumeric, add 1 to l pointer
      while (l < r && !this.alphaNum(s[l])) {
        // we check l < r again to make sure l never passes r and vice verse
        // and to ensure that the pointer does not go out of bounds
        l++;
      }

      // same thing goes with the right pointer
      while (r > l && !this.alphaNum(s[r])) {
        r--;
      }

      // if lower case l pointer value is not equal to lower case r pointer value
      // then return false
      if (s[l].toLowerCase() !== s[r].toLocaleLowerCase()) {
        return false;
      }

      // if all above conditions pass, then we want to move onto the next set
      // of characters for both pointers
      l++;
      r--;
    }
    return true;
  }

  /**
   * checks if character is alphanumeric using ASCII/Unicode values
   * @param {char} c
   * @return {boolean}
   */
  alphaNum(c) {
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
    );
  }
}
