// console.log("Use the calculator like this: operator number1 number2 e.g. add 5 5");
    
var input = process.argv;
var operator = input[2];
var num1 = parseFloat(input[3]);
var num2 = parseFloat(input[4]);
var result = 0;

// Use an else if satement
// if (operator === "add") {
//     result = num1 + num2;
// } else if (operator === "subtract") {
//     result = num1 - num2;
// } else if (operator === "divide") {
//     result = num1 / num2;
// } else if (operator === "multiply") {
//     result = num1 * num2;
// } else {
//     console.log("There was an error in your equation!");
// };

// console.log(result);



// Use a switch function
switch(operator) {

    case "add": result = num1 + num2
        break;
    case "subtract": result = num1 - num2;
        break;
    case "divide": result = num1 / num2;
        break;
    case "multiply": result = num1 * num2;
        break;
    default:
        console.log("There was an error in your equation!");

};

console.log(result);