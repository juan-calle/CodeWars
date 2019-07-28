/* Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input)))) */
/* jshint esversion:6 */

// SOLUTION
function chained(functions) {
  return function (input) {
    for (var i = 0; i < functions.length; i++) {
      input = functions[i](input);
    }

    return input;
  };
}
