/*

Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/

// TC: O(n + m) SC: O(1)

function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length,
    len2 = str2.length;

  // since we're testing for repeatable substrings in an array
  // if we can produce the same word with both strings then we proceed
  // with logic
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // check if l is a factor of the length of both strings
  function isDivisor(l: number): Boolean {
    // if the mod l of both lengths isn't a factor then return false
    if (len1 % l != 0 || len2 % l != 0) {
      return false;
    }
    let f1 = len1 / l,
      f2 = len2 / l;
    return (
      str1.slice(0, l).repeat(f1) === str1 &&
      str2.slice(0, l).repeat(f2) == str2
    );
  }

  // iterate thru the range of min of either len1 or len2
  for (let l = Math.min(len1, len2); l >= 1; l--) {
    if (isDivisor(l)) {
      return str1.slice(0, l);
    }
  }
  return "";
}
