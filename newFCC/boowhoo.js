/*
Basic Algorithm Scripting - Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function booWho(bool) {
  if (bool === true || bool === false) {
      console.log(true);
  return true;
  } else {
      console.log(false);
  return false; 
}
}

booWho(null);



booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");