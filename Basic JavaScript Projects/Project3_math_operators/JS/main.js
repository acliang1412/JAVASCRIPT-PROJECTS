// This function is called when the paragraph with the id "Math" is clicked.
function performCalculation() {
    // Perform an addition operation
    var result = 5 + 7;
    // Display the result in the paragraph element
    document.getElementById("Math").innerHTML = "5 + 7 = " + result;
}

// This function performs a subtraction operation
function subtraction_Function() {
    var Subtraction = 10 - 5;
    document.getElementById("Math").innerHTML = "10 - 5 = " + Subtraction;
}

// This function performs a multiplication operation
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

// This function performs a division operation
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 3) * 4 / 2 - 5;
    document.getElementById("Math").innerHTML = "2 plus 3, multiplied by 4, divided in half and then subtracted by 5 equals " + simple_Math;
}