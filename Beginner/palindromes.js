
function palindrome(str) {
    var strNew = str.replace(/[\W_]/g, '').toLowerCase();
    var strRev = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    if (strNew == strRev){
        return true
    } else {
        return false;
    }
}

