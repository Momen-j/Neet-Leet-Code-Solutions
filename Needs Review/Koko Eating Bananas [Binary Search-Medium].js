/*

Koko Eating Bananas
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. 
You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas 
from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat 
from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.

*/

// TC: O(nlogm) Where n is the length of the input array piles and m is the maximum number of bananas in a pile.
// SC: O(1)

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let l = 1,
      r = Math.max(...piles);
    // we set result to r because we know the max # in piles will
    // be the eating rate at which all bananas will be eaten
    // before the time limit
    let res = r;

    // k in this case is the eating rate
    while (l <= r) {
      const k = Math.floor((l + r) / 2);

      let totalTime = 0;
      for (const p of piles) {
        // divide p (# of bananas) by k (eating rate)
        totalTime += Math.ceil(p / k);
      }

      // if total time to eat bananas is less than h
      // set result equal to current eating rate
      // move right pointer one behind # for k to check other
      // values to see if there's a smaller k value
      if (totalTime <= h) {
        res = k;
        r = k - 1;
      } else {
        // else move pointer ahead of k one
        l = k + 1;
      }
    }
    return res;
  }
}

// BRUTE FORCE
// TC: O(m * n) SC: O(1) Where n is the length of the input array piles and m is the maximum number of bananas in a pile.

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let speed = 1;
    while (true) {
      let totalTime = 0;
      for (let pile of piles) {
        totalTime += Math.ceil(pile / speed);
      }

      if (totalTime <= h) {
        return speed;
      }
      speed++;
    }
  }
}
