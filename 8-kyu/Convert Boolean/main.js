/*

Challenge: https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

// My solution

function convertBoo(boo) {
  if (boo === true) {
    return `Yes`;
  } else return `No`;
}

// Other solutions

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
