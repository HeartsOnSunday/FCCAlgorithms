function convertToRoman(num) { //num is a string
	var numRoman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	var numDecimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	var roman = "";
	
		for (var i = 0; i < numDecimal.length; i++){ 
		    while (numDecimal[i] <= num) {
		        //console.log(num + " num rn");
		        roman += numRoman[i];
		        //console.log(numRoman[i] + " Roman Numeral");
		        num -= numDecimal[i];
		        //console.log(numDecimal[i] + " Decimal Number");
		        //console.log(roman);
		        }
		}
		//console.log(roman);
		return roman;
}
	//console.log(roman);
convertToRoman(45);
