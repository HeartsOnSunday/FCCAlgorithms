function repeatStringNumTimes(str, num) {
    var empty = "";
    if (num <= 0) {
        console.log("empty");
        return empty;
    } else {
        for (var i = num; i > 0; i--)
            empty += str;
    }
    
  

  console.log(empty);
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("*", 3)