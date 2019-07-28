/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'. */

/* jshint esversion:6 */

// SOLUTION
function list(names) {
  let namesArr = [];
  for (let i = 0; i < names.length; i++) {
    if (i < names.length - 2) {
      namesArr.push(names[i].name + ', ');
    } else if (i == names.length - 2) {
      namesArr.push(names[i].name + ' & ');
    } else {
      namesArr.push(names[i].name);
    }
  }

  return namesArr.join('');
}
