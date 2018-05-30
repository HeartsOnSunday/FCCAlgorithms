
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitPeriod = [];
for (var i = 0; i < arr.length; i++) {
    var name = arr[i].name;
    var alt = arr[i].avgAlt;
    var aCub = Math.pow((alt + earthRadius), 3); 
    // var aCub = (alt + earthRadius) ** 3;
    var op = Math.round(2 * Math.PI * Math.sqrt(aCub/GM));
    orbitPeriod.push({name: name, orbitalPeriod: op});
}
    console.log(orbitPeriod);
    return orbitPeriod;

}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
