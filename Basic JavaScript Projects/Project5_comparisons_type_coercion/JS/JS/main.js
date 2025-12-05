// Display NaN by performing an undefined mathematical operation
document.write("0 divided by 0 results in: " + 0/0 + "<br><br>");

// Utilize isNaN() to display "true" by checking a non-numeric string
document.write("Is 'Hello!' a number? ");
document.write(isNaN('Hello!'));
document.write("<br><br>");

// Utilize isNaN() to display "false" by checking a number
document.write("Is 500 a number? ");
document.write(isNaN(500) + "<br><br>");

// Use the greater-than operator to display "true"
document.write("10 > 4 evaluates to: ");
document.write(10 > 4);
document.write("<br><br>");

// Use the less-than operator to display "false"
document.write("10 < 4 evaluates to: ");
document.write(10 < 4);

// Display Infinity and -Infinity using getElementById
// A number larger than 1.7976931348623157E308 (Number.MAX_VALUE) displays as Infinity.
document.getElementById("infinity").innerHTML = 2E308;
// A negative number smaller than -Number.MAX_VALUE displays as -Infinity.
document.getElementById("neg_infinity").innerHTML = -3E308;
