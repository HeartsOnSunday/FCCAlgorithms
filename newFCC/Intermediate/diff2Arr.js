/*
Intermediate Algorithm Scripting - Diff Two Arrays
Compare two arrays
return a new array with any items only found in one of the two given arrays,
but not both.
In other words, return the symmetric difference of the two arrays.

Receive two arrays
merge the arrays (use an existing array, if possible)

Compare the contents of the arrays by parsing the frequencies (numbers)*

if the number is present in both arrays then the number will appear 2x
if the number is present in only one array then the number will appear == 1x
if the number does not appear in either aarray then the number will appear 0x

Array.prototype.indexOf();
if (2x or more?) .indefOf(); returns index of (allx or firstx then secondx)
if (1x) .indexOf() returns the first/only index.
if (0x) .indexOf() returns -1 (does not exist)

lastIndexOf() will return -1 if a number is only listed once (or never)
lastIndexOf() will return the index if the number occurs 2x.

*/

function diffArray(arr1, arr2) {
    var newArr = arr1.slice().concat(arr2.slice());
    //console.log(newArr);
    var rtnArray = [];
  for (var i = 0; i < newArr.length; i++) {
      var first = newArr.indexOf(newArr[i]);
      var last = newArr.lastIndexOf(newArr[i]);
        if (first == last) {
          rtnArray.push(newArr[i]);
        }
  }
  console.log(rtnArray);
  return rtnArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);