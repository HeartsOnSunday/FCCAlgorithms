function rot13(str) { // LBH QVQ VG!

    return str.split('')
        .map.call(str, function(char) {
        var x = char.charCodeAt(0);
        if (x < 65 || x > 99) {
            return String.fromCharCode(x);
        }
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
    }).join('');

//   var capA = 65;
//   var capZ = 65 + 25;
//   var codeA = String.fromCharCode(capA);
//   console.log(codeA);
//   var codeZ = String.fromCharCode(capZ);
//   console.log(codeZ);
//   for (var i = 0; i < str.length; i++) {
//      var asciiVal = str.charCodeAt(str[i]);
//       console.log(asciiVal);
//   }
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");