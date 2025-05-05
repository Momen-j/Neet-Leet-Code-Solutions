/*
Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true 
if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// TC:  SC:

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // main idea: expand array to have two empty plots at the ends
  // then only iterate thru the elements in the original array while
  // comparing left, right, and current element to check if all empty
  // if so, we can add a flower
  let f = [0, ...flowerbed, 0];

  // do not iterate on the first and last index of new array
  for (let i = 1; i < f.length - 1; i++) {
    // check if there are 3 contiguous 0s together

    if (f[i - 1] === 0 && f[i] === 0 && f[i + 1] === 0) {
      // plant a flower
      f[i] = 1;

      // decrement n since we planted a flower
      n -= 1;
    }
  }

  return n <= 0;
}
