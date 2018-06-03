/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast, first, last, full) {
  // Complete the method below and implement the others similarly
    this.getFullName = function() {
        console.log(firstAndLast);
        return firstAndLast;
  };
    this.getFirstName = function() {
        
    }; 
    this.getLastName = function() {
        
    } 
    this.getFullName = function() {
        
    };
    this.setFirstName = function(first) {
        
    };
    this.setLastName = function(last) {
        
    };
    this.setFullName = function(firstAndLast) {
        
    };
  
  //return firstAndLast;
};

var bob = new Person('Bob Ross', 'Bob', 'Ross', 'Bob Happy Little Trees Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName(first);
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
*/