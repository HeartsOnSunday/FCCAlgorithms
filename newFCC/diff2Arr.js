/*
Intermediate Algorithm Scripting - Diff Two Arrays
Compare two arrays
return a new array with any items only found in one of the two given arrays,
but not both.
In other words, return the symmetric difference of the two arrays.

*/

var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3