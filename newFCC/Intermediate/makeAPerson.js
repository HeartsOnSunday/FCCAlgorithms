/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/


var Person = function(firstAndLast, first, last) {
  // Complete the method below and implement the others similarly
    this.getFullName = function() {
        console.log(firstAndLast);
        return firstAndLast;
  };
    this.getFirstName = function() {
        console.log(first);
        return first;
    }; 
    this.getLastName = function() {
        console.log(last);
        return last;
    };
    this.setFirstName = function(first) {
        
    };
    this.setLastName = function(last) {
        
    };
    this.setFullName = function(firstAndLast) {
        
    };
  
  //return firstAndLast;
};

var bob = new Person('Bob Ross', 'Bob', 'Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
/*bob.setFirstName(first);
bob.setLastName(last);
bob.setFullName(firstAndLast);

/*

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
=======
var Person = function(firstAndLast){
  // Complete the method below and implement the others similarly
    this.sFullName = firstAndLast;
    var splitName = firstAndLast.split(' ');
    this.sFirst = splitName[0];
    this.sLast = splitName[1];
    
    this.setFirstName = function(sFirst){
        this.sFirst = sFirst;
    };
    
    this.setLastName = function(sLast){
        this.sLast = sLast;
    };
    
    this.setFullName = function(sFullName){
        this.sFullName = sFullName;
    };
    
    this.getFullName = function() {
        console.log(firstAndLast);
        return this.sFullName;
  };
    this.getFirstName = function() {
        console.log(this.sFirst);
        return this.sFirst;
    }; 
    this.getLastName = function() {
        console.log(this.sLast);
        return this.sLast;
    };
  //return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
//console.log(Person.keys(bob).length);
/*bob.setFirstName(first);
bob.setLastName(last);
bob.setFullName(firstAndLast);
*/

Object.keys(bob).length;
bob instanceof Person;
bob.firstName;
bob.lastName;
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName("Haskell");
bob.getFullName();
bob.setLastName("Curry");
bob.getFullName();
bob.setFullName("Haskell Curry");
bob.getFullName();
bob.setFullName("Haskell Curry");
bob.getFirstName(); 
bob.setFullName("Haskell Curry");
bob.getLastName(); 


/*
Currently Fails:

Object.keys(bob).length should return 6.
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

>>>>>>> dev
*/