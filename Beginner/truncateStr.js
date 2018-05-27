
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    if (num <= 3){
      console.log(str.slice(0, num) + "...");
    } else {
      console.log(str.slice(0, num - 3) + "...");
    }
  } else if (str.length <= num) {
      console.log(str);
  }
  
  //return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);