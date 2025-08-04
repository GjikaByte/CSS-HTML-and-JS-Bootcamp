//function example
function greet(name) {  
    console.log("Hello, " + name + "!");
}

//function with return value
function add(a, b) { 
    return a + b; 
}

//function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

//function with rest parameters,using const
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
}

const generateNumbList = function(m=30,n=100) {
    const arrOfNums = [];
    for (let i = 0; i < m; i++) {
        arrOfNums.push(Math.floor(Math.random() * (n + 1)));
    }
    return arrOfNums;
}

console.log(generateNumbList(2, 10)); // Example usage