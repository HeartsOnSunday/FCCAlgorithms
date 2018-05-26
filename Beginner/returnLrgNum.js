
function largestOfFour(arr) {
    var numArr = [];
    var lrgstNum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > lrgstNum) {
            lrgstNum = arr[i][j];
        }
    }
    numArr.push(lrgstNum);
    lrgstNum = 0;
}
console.log(numArr);
}


largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
