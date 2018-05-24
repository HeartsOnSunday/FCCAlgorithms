function titleCase(str) {
  
  var newStr = str.toLowerCase().split(" ");
  
  for (var i = 0; i < newStr.length; i++) {
    
    newStr = newStr[i].char(0).toUpperCase();

  }
  return newStr;
  
    
}

    function operatr (newStr) {
      
      var up = newStr[i].charAt(0).toUpperCase();
   // console.log(up);
      return newStr;
    }

titleCase("I'm a little tea pot");

/*

function titleCase(str) {
  var newStr = str.split(" ");
  console.log(newStr);
  var lowercase = newStr.toLowerCase();
  console.log(lowercase);
  var uppercased = lowercase.charAt(0).toUpperCase();
  console.log(uppercased);
  
  return str;
}

titleCase("I'm a little tea pot");
*/
