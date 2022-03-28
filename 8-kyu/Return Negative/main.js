/*

Challenge: https://www.codewars.com/kata/55685cd7ad70877c23000102

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

*/

// My solution

const makeNegative = (num) => (num < 0 ? num : -num);

// Other solutions

function makeNegative(num) {
  return -Math.abs(num);
}
