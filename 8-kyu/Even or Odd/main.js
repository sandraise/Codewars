/*

Challenge: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

*/

// My solution

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

// Other solutions

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}