/*

Challenge: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

*/

// My solution

function solution(str) {
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

// Other solutions