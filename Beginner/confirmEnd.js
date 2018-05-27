
function confirmEnding(str, target) {
    var lastChar = str.substr(str.length - target.length);
    if (lastChar == target) {
        return true;
    } else {
        return false;
    }
}

//confirmEnding("Bastian", "n");

confirmEnding("Open sesame", "same");