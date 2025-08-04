console.log("Hello, World!");
console.log("This is a JavaScript file located in the U1_W2_D1_JS directory.");
window.alert("Welcome to the JavaScript lesson!");
console.log("This script is running in the browser console, only afterthe alert.");

alert("This is an alert message from the script.js file.");

console.log("End of script.js execution.");

// Additional functionality added here
console.log(prompt("Please enter your name:", "Guest")) ;

// Confirmation dialog
console.log(confirm("Do you want to proceed?")); 

// Variables

let userName = prompt("What is your name?");
console.log(userName);

let mynumber = prompt("Enter a number:" );

// Convert input to a number before adding
let varsum = Number(mynumber) + 10;
console.log(varsum);

mynumber = prompt("Enter another number:" );
varsum = Number(mynumber) * varsum;
console.log(varsum);

// Combining strings
let greeting = "Hello, " + userName + "! Your final number is: " + varsum;
console.log(greeting);

let combinedWords = `${greeting} ${new Date().toLocaleDateString()}`;
console.log(combinedWords);

const currentDate = new Date();