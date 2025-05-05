/*
Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/

// TC: O(n) SC: O(1)

function mergeAlternately(word1: string, word2: string): string {
  let i = 0,
    j = 0;
  let res: string[] = [];

  // while i < len of word 1 & j < len of word 2
  // while i and j are inbounds of both words
  while (i < word1.length && j < word2.length) {
    res.push(word1[i]);
    res.push(word2[j]);
    i += 1;
    j += 1;
  }
  // add the rest of the letters from word 1 starting from index i
  // if all letters have been added already (out of bounds), then nothing is pushed
  res.push(word1.slice(i));

  // do the same for word2
  res.push(word2.slice(j));

  return res.join("");
}
