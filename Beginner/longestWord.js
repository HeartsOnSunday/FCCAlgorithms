
function findLongestWord(str) {
    var string = str.split(" ");
    var longest = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i].length > longest) {
             longest = string[i].length;
        }
    }
    
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
