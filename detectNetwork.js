// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var card = cardNumber.split('');
	var firstTwo = [];
	var firstFour = [];

	firstTwo.push(card[0], card[1]);
	firstTwo.join('');

	firstFour.push(card[0], card[1], card[2], card[3]);
	firstFour.join('');

	if((firstTwo === 38 || 39) && (cardNumber.length === 14)){
		return 'Diner\'s Club';
	} else if ((firstTwo === 34 || 37) && (cardNumber.length === 15)) {
		return 'American Express';
	} else {
		return undefined;
	}
};

