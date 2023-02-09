var romanToInt = function(romanNumber) {
  let arabicNumber = 0;
  let rigthZero = 0;

  for(let i = romanNumber.length - 1; i >= 0; i--) {
      let value = convertNumeralRoman(romanNumber.charAt(i));
      arabicNumber += value * Math.sign(value + 0.5 - rigthZero);
      rigthZero = value;
  }
  
  return arabicNumber;
};

function convertNumeralRoman(eachCharacter) {
  return Math.floor(Math.pow(10, "IXCM".indexOf(eachCharacter)))
      + 5 * Math.floor(Math.pow(10, "VLD".indexOf(eachCharacter)));
}