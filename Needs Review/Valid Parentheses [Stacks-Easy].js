// Valid Parentheses
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:
// 1. Every open bracket is closed by the same type of close bracket.
// 2. Open brackets are closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Return true if s is a valid string, and false otherwise.

// TC: O(n) where n represents the length of s
// SC: O(n) where n represents the length of s
// SC is O(n) bc in the worst case the stack will have to store every element within s, making it O(n) SC
// BUT bc the size of the Map is FIXED (we aren't adding any of the elements from s into it), it's SC is O(1)
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];

    // map the closing symbols to the opening symbols
    const closeToOpen = new Map([
      [")", "("],
      ["]", "["],
      ["}", "{"],
    ]);

    // for each character in s, check if the closeToOpen Map contains c (closing symbols) as a key
    // if so, check if the stack isn't empty & if the last element in the stack is
    // the opening counterpart of the closing bracket

    // IF the above is true, pop the last element from the stack else return false

    // IF closeToOpen doesn't contain the character as a key, push the character into the stack
    // the character in this case will always be an opening bracket
    for (let c of s) {
      if (closeToOpen.has(c)) {
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === closeToOpen.get(c)
        ) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    return stack.length === 0;
  }
}

///

// BRUTE FORCE SOLUTION
// TC: O(n^2)
// SC: O(n)
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
      s = s.replace("()", "");
      s = s.replace("{}", "");
      s = s.replace("[]", "");
    }
    return s === "";
  }
}
