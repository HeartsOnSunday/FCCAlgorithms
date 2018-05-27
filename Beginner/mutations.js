
function mutation(arr) {
    
var I = arr[0].toLowerCase();
var II = arr[1].toLowerCase();
console.log(I);
console.log(II);
for (var i = 0; i < II.length; i++) {
    if (I.indexOf(II[i]) === -1) 
    console.log(false);
}
console.log(true);
//var x = arr[0].indexOf(II);
//console.log(x);
}

mutation(["hello", "hey"]);
mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
