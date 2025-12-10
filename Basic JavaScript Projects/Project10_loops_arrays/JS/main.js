
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

// A for loop to iterate through an array

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function arrayFunction() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}