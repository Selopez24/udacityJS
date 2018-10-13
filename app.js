/*
 *This file will have some basic exercises from Udacity's Intro to JS course
 */


 // Hello World test
var msg = 'Hello World';

console.log(msg);

// Celsius to Fahrenheit
var celsius = 12;
var fahrenheit = celsius*1.8+32 /* convert celsius to fahrenheit here */

console.log(fahrenheit/* print out result here */);


// String indexing 

var quote = "Stay awhile and listen!";
console.log(quote[6]);

//Escaping Strings

console.log("The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.")
console.log("This is a \n new line and \t tab test");

/*
 * Programming Quiz: Yosa Buson (2-6)
 */

var haiku = 'Blowing from the west' + '\nFallen leaves gather' + '\nIn the east.'
console.log(haiku);

/*
 * Conditionals
 */

 //If and Else if statements

 var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}



// Ternary operator

var isGoing = true;
var color = isGoing ? "green" : "red"; //  conditional ? (if condition is true) : (if condition is false)
console.log(color);

// Switch 

var option = 1;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

// For loops

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}