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

/*Functions
 * 
 *
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num){
    
  var ha = "ha";
  var laugh = "";
  
  for (var i = 0; i<num; i++){
      
      laugh = laugh + ha;
      
  }
  
  return laugh+"!";
}

console.log(laugh(4))


// Arrays

var donuts = ["glazed", "chocolate frosted", "Boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];
console.log(donuts[2]);

donuts.pop();   // removes last element
donuts.push("Arequipe"); // adds to the last element

// forEach()
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// map()
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

// Array of arrays

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}   