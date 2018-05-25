function titleCase(str) {
  var withCaps = str.toLowerCase().split(' ');
   for (var i = 0; i < withCaps.length; i++){
      withCaps[i] = withCaps[i].charAt(0).toUpperCase() + withCaps[i].slice(1);
       }
    return withCaps.join(' ');
}
titleCase("I'm a little tea pot");