/* Strong number is the number that the sum of the factorial of its
digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not. */
/* jshint esversion:6*/

// SOLUTION:
function strong(n) {
  let result = 0;
  String(n).split('').forEach(x => {
    let sum = 1;
    for (let i = x; i > 1; i--) sum *= i;
    result += sum;
  });
  return (result !== n) ? 'Not Strong !!' : 'STRONG!!!!';
}
