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
	firstTwo = firstTwo.join('');

	firstFour.push(card[0], card[1], card[2], card[3]);
	firstFour.join('');

	if((cardNumber.length === 14) && ((firstTwo === '38') || (firstTwo === '39'))) {
		return 'Diner\'s Club';
	} else if ((cardNumber.length === 15) && ((firstTwo === '34') || (firstTwo === '37'))) {
		return 'American Express';
	} else if (((cardNumber.length === 13) || (cardNumber.length === 16) || (cardNumber.length === 19)) && (card[0] === '4')) {
		return 'Visa';
	} else if ((cardNumber.length === 16) && ((firstTwo === '51') || (firstTwo === '52') || (firstTwo === '53') || (firstTwo === '54') || (firstTwo === '55'))){
		return 'MasterCard';
	} else {
		return undefined;
	}
};

