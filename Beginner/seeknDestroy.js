
function destroyer(arr) {
    var a = Array.prototype.slice.call(arguments);
    /*console.log(arguments);
    console.log(a);
    console.log(arr); */
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0 ; j < a.length; j++) {
            if (arr[i] === a[j]) {
                //console.log(a[i]);
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

/*
.slice();
.filter();







.call();

CALL


function destroyer(arr) {
  
  var object = {
      nameOfFunction: function() {
          return this.firstName + " " + this.lastName;
      }
  };
  var person1 = {
      firstName: "John",
      lastName: "Doe",
  }
  var person2 = {
      firstName: "Jane",
      lastName: "Doe",
  }
  
 object.fullName.call(person1);     

}


*/