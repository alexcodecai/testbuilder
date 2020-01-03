// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
    var firstTwo = cardNumber.substring(0,2);
    var firstOne = cardNumber.substring(0,1);
    var firstFour = cardNumber.substring(0,4);
    var firstThree = cardNumber.substring(0,3);
    var firstSix = cardNumber.substring(0,6);
    var num = parseInt(firstTwo);
    var num2 = parseInt(firstOne);
    var num3 = parseInt(firstThree);
    var num4 = parseInt(firstFour);
    var num6 = parseInt(firstSix);
    // console.log(num);
    if (cardNumber.length === 14 && (num === 38 || num === 39 )){
        return "Diner's Club";
    } else if (cardNumber.length === 15 && (num === 34 || num === 37 )){
        return "American Express";
    } else if((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (num4 === 4903 || num4 === 4905 || num4 === 4911 || num4 === 4936 || num6 === 564182 || num6 === 633110 || num4 === 6333 || num4 === 6759)){
        return "Switch";
    } else if(num2 === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
        return "Visa";
    } else if ((cardNumber.length === 16 ) && (num > 50 && num < 56)) {
        return "MasterCard";
    } else if ((cardNumber.length === 16 || cardNumber.length === 19) && ( num === 65 || num4 === 6011 || (num3 >= 644 && num3 <= 649))){
        return "Discover";
    } else if((cardNumber.length > 11 && cardNumber.length < 20) && (num4 === 5018 || num4 === 5020 || num4 === 5038 || num4 === 6304)){
        return "Maestro";
    } else if((cardNumber.length > 15 && cardNumber.length < 20) && ((num6 >= 622126 && num6 <=622925) ||(num3 >=624 && num3 <= 626) || (num4 >= 6282 && num4 <= 6288))){
        return "China UnionPay";
    }
   
    
    // return undefined;
};


