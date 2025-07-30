const fruit = "litchis";

if (fruit === "litchis") {
  console.log("I like litchis!");
} else if (fruit === "bananas") {
  console.log("I like bananas!");
} else {
  console.log("I like other fruits!");
}


//Switch statement example
switch (fruit) {
  case "litchis":
    console.log("I like litchis!");
    break;
  case "bananas":
    console.log("I like bananas!");
    break;
  default:
    console.log("I like other fruits!");
}

switch (true) {
  case fruit === "litchis":
    console.log("I like litchis!");
    break;
  case fruit === "bananas":
    console.log("I like bananas!");
    break;
  default:
    console.log("I like other fruits!");
};

// while loop example
let i = 0;
while (i < 5) {
    console.log("Current value of i:", i);
    i++;
};

weight = 0;
while (weight < 100) {
    console.log("Current weight:", weight);
    userinput = prompt("Enter your weight:");
    if (userinput === null) {
        console.log("User cancelled the input.");
        break;
    }
    weight += parseInt(userinput);
}   

// for loop exampleP

for (let i = 0; i < 5; i++) {
    console.log("Current value of i:", i);
}