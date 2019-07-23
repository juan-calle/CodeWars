// There is an array with some numbers. All numbers are equal except for one.
// Try to find it!
// Examples:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance!

// SOLUTION
/* jshint esversion: 6 */

function findUniq(arr) {
  arr = arr.sort((a, b) => a - b);
  return (arr.lastIndexOf(arr[0]) === arr.indexOf(arr[0])) ? arr[0] : arr[arr.length - 1];
}
