// Given an array of numbers, check if any of the numbers are the character
// codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// SOLUTION
/* jshint esversion:6*/

function isVow(a) {
  let copy = [...a];
  for (let i = 0; i < copy.length; i++) {
    let vowel = String.fromCharCode(copy[i]);
    if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
      copy[i] = vowel;
    }
  }

  return copy;
}
