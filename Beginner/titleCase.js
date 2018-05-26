function titleCase(s) {
  var s = s.toLowerCase().split(' ');
   for (var i = 0; i < s.length; i++){
      s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
       }
       console.log(s.join(' '));
    return s.join(' ');
}
titleCase("I'm a little tea pot");