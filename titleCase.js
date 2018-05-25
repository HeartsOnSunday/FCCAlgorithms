function titleCase(str) {
  //var lowStr = str.toLowerCase();
  var withCaps = "";
  withCaps = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    //console.log(withCaps);
   for (var i = 1; i < str.length; i++){
      if (str[i] == " "){
          withCaps[i] = str[i + 1].toUpperCase();
          
               // console.log("Space at " + i);
                // withCaps += withCaps.concat(str[i]);
                // withCaps += withCaps.concat(str[i + 1]);
                // i += 1;
                // console.log(withCaps);
                // //withCaps += withCaps.charAt(i + 1).toUpperCase();
                // //i += 1;
 //            chars = withCaps.charAt(i).toUpperCase().concat(lowStr[i]);
//           console.log("hello");
       }
       //console.log(withCaps);
        
//   }
   }
    console.log(withCaps);
}


titleCase("I'm a little tea pot");