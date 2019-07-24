// Description:
// Each exclamation mark weight is 2; Each question mark weight is 3.
// Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side
//  is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

/* jshint esversion:6 */

// SOLUTION
function balance(left, right) {
  let leftValue = (left.replace(/[^!]/g, '').length * 2) + (left.replace(/[^?]/g, '').length * 3);
  let rightValue = (right.replace(/[^!]/g, '').length * 2) + (right.replace(/[^?]/g, '').length * 3);

  if (leftValue == rightValue) return 'Balance';
  return leftValue > rightValue ? 'Left' : 'Right';

}
