/*
function convertHTML(str) {
  // &colon;&rpar;
  
  var replaceElements = { "&":"&amp;", 
                         "<":"&lt;", 
                         ">":"&gt;", 
                         "\"":"&quot;", 
                         "'":"&apos;"};
  
  return str.replace(/&|<|>|"|'/g,function(match){
    return replaceElements[match];
  });
  
  */
  
  
var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}
//}

convertHTML("Dolce & Gabbana");
  


/*
replaceElements[match]
 */
 



/*
hashMap["character"]
"&amp"

*/


//Use a hashmap!!

