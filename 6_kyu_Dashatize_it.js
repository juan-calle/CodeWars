// Given a number, return a string with dash'-'marks before and after
// each odd integer, but do not begin or end the string with a dash mark.
// Ex:
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  return num.toString().
      replace(/([13579])/g, '-$1-'). // dashes around odd digits
      replace(/\-+/g, '-'). // replace multiple dashes by one dash
      replace(/^\-/, ''). // remove starting dash
      replace(/\-$/, ''); // remove ending dash
}
