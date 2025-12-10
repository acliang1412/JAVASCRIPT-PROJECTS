
// A simple while loop for counting
function myLoop() {
	let Digit = "";
	let X = 1;
	while (X < 6) {
		Digit += "<br>" + X;
		X++;
	}
    return Digit;
}
// A function to demonstrate the string length property
function stringLengthDemo() {
	let text = "How many characters are in this string?";
	let length = text.length;
	return "The string '" + text + "' has " + length + " characters.";
}