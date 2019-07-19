// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// SOLUTION

function findShort(s) {
  var stringArray = s.split(' ');
  var shortest = stringArray[0];
  for (var i = 0; i < stringArray.length; i++) {
    if (shortest.length > stringArray[i].length) {
      shortest = stringArray[i];
    }
  }

  return shortest.length;
}
