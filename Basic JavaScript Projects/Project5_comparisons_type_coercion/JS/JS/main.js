// Display NaN by performing an undefined mathematical operation
document.write("0 divided by 0 results in: " + 0/0 + "<br><br>");

// Utilize isNaN() to display "true" by checking a non-numeric string
document.write("Is 'Hello!' a number? ");
document.write(isNaN('Hello!'));
document.write("<br><br>");

// Utilize isNaN() to display "false" by checking a number
document.write("Is 500 a number? ");
document.write(isNaN(500));
