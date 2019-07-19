// Simple repeated words
// In this Kata, you will count the number of times the first string occurs in
// the second.

// solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ,
// zaZApulZ
// More examples in test cases.

// SOLUTION
/*jshint esversion:6*/

const solve = (a, b) => a ? [...b].reduce(
  (sum, cur, i) => sum + (cur === a[0] ?
    solve(a.slice(1), b.slice(i + 1)) : 0
  ), 0) : 1;
