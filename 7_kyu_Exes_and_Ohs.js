// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true   !when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//SOLUTION
function XO(str) {
  let x = 0;
  let o = 0;
  for(let i = 0; i<str.length; i++){
    str[i] === 'x' || str[i] === 'X' ? x +=1 : x+=0;
    str[i] === 'o' || str[i] === 'O' ? o +=1 : o+=0;
  }
  return x === o;
}
