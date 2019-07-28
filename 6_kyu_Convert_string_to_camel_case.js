/* Complete the method/function so that it converts dash/underscore
delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

/* jshint esversion:6 */

// SOLUTION:
function toCamelCase(str) {
  let upperCase = function (str, idx) {
    str = str.split('');
    str[idx] = str[idx].toUpperCase();
    return str.join('');
  };

  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === '-' || str[i - 1] === '_')
      str = upperCase(str, i);
  }

  return str.replace(/[\_\-]/g, '');
}
