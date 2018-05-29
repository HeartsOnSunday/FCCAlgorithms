function diffArray(arr1, arr2) { //two diff arrays 
  var newArr = []; //new array to push to
  var stringArr1 = arr1.toString(" ");
  var stringArr2 = arr2.toString(" ");
  console.log(stringArr1);
  console.log(stringArr2);
 for (var i = 0; i < stringArr1; i++) 
  console.log("outside" + stringArr1[i]);
    for (var j = 0; j < stringArr2 ; j++) 
    console.log("Inside" + stringArr2[j]);
        if (stringArr1[i] === stringArr2[j]) {
            console.log("Remove " + stringArr1[i]);
        } 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

