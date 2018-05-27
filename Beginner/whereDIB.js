
function getIndexToIns(arr, num) {
    arr.sort(function(i, x) {
        return i - x;
    });
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
        //console.log(i);
        return i;
    }
        //console.log(arr.length);
        return arr.length;  
    }
  // Find my place in this sorted array.



getIndexToIns([10, 20, 30, 40, 50], 35);

/*
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
*/
