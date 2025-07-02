//Setup
/*
console.log(`Hello`); // Can use "", '', or `` (backticks)
console.log(`I Like Pizza!`);

window.alert(`This is an alert!`);
window.alert(`Did you see that!`);

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!!!`;
*/

//Variables
/*
let y = 5;
let x; //Declaration
x = 10.5; //Assignment
let boollin = false;
let name = "Rishit";
let age = 22;
let student = true;

if(boollin) {
    console.log(`x = ${x}`);
    console.log(`x is a ` + typeof x);
}

document.getElementById("p1").textContent = `Your Name is: ${name}`;
document.getElementById("p2").textContent = `You Are ${age} Years Old`;
document.getElementById("p3").textContent = `Enrolled: ` + student;
*/

//Arithmetic Operators (the usual)
/*
let students = 30;

//students -= 1;
students **= 2; //students = students ** 2, ** is the exponent operator
//% (modulus operator) is the same here
//increment and decrement operators exist
/* Operator Precedence:
1. Parenthesis
2. Exponents
3. Multiplication, Division, Modulo
4. Addition & Subtraction 
*/

//console.log(students);

//User Input
// Easy Way: Window Prompt
// Professional Way: HTML textbox

/*
let username;

//username = window.prompt("Enter Username:");

document.getElementById("submit").onclick = function() {
    username = document.getElementById("input").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    //console.log(username);
};
*/

//Type Conversion
/*
let age = window.prompt("How Old Are You?");

age = Number(age);
age += 1; //by default, if not instantiated previously, varible is of type string
*/

/*
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); //any non-number string to a number becomes NaN, unless empty
y = String(y); //no change
z = Boolean(z); //non-empty values is always true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//Constants

// const: the final of JS
/*
const PI = 3.14159; //only primitive consts (boolean, numbers, characters) are capitalized
let radius;
let circumference;

radius = window.prompt(`Enter the Radius:`);
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
*/

//Counter Program
/*
const decBut = document.getElementById("dec"); // decrease button
const resetBut = document.getElementById("reset"); // reset button
const incBut = document.getElementById("inc"); // increase button
const countLabl = document.getElementById("counter"); // counter label

let count = 0;

decBut.onclick = function() {
    count--;
    countLabl.textContent = count;
};

resetBut.onclick = function() {
    count = 0;
    countLabl.textContent = count;
};

incBut.onclick = function() {
    count++;
    countLabl.textContent = count;
};
*/

//Math
/*
let x = 3;
let y = -2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x); //always rounds down
//z = Math.ceil(x); //always rounds up
//z = Math.trunc(x); //removes any values after decimal
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x); //input is in radians, same for cos and tan
//z = Math.abs(y); //absolute value
//z = Math.sign(x); // if negative, returns -1, returns 1 if positive
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(min);
*/

//Random Number Generator
/*
const rollButton = document.getElementById("rollButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randNum1;
let randNum2;
let randNum3;

rollButton.onclick = function() {
    randNum1 = Math.floor(Math.random() * max) + min; //Math.random() gives a random number between 0 and 1 by default
    randNum2 = Math.floor(Math.random() * max) + min;
    randNum3 = Math.floor(Math.random() * max) + min;
    
    label1.textContent = randNum1;
    label2.textContent = randNum2;
    label3.textContent = randNum3;
};
//console.log(randNum);
*/

//if Statements
/*
let age = 5;

//nested ifs and else ifs also work
if(age >= 18) {
    console.log("You are an adult!");
}
else
    console.log("You are not an adult!");
*/

//Checked Property
//.checked: Used for radio buttons and checkboxes
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function() {
    if(myCheckBox.checked)
        subResult.textContent = `You are subscribed!`;
    else
        subResult.textContent = `You are not subscribed!`;

    if(visaBtn.checked)
        paymentResult.textContent = `You are paying with Visa.`;
    else if(mastercardBtn.checked)
        paymentResult.textContent = `You are paying with MasterCard.`;
    else if(paypalBtn.checked)
        paymentResult.textContent = `You are paying with PayPal.`;
    else
        paymentResult.textContent = `Please select a payment method.`
}
*/

//Ternary Operator
//Syntax: condition ? codeIfTrue : codeIfFalse;
/*
//let age = -21;
//let message = age >= 18 ? "You are an adult!" : age < 0 ? "You can't be less than 0!" : "You are a minor!";
let amount = 90;
let discount = amount >= 100 ? 10 : 0;

console.log(`Your total is ${amount - (amount * (discount / 100))}`);
*/

//Switch
/*
let day = "pizza";

switch(day) {
    case 1:
        console.log("It's Sunday!!");
        break;
    case 2:
        console.log("It's Monday!");
        break;
    case 3:
        console.log("It's Tuesday!");
        break;
    case 4:
        console.log("It's Wednesday!");
        break;
    case 5:
        console.log("It's Thursday!");
        break;
    case 6:
        console.log("It's Friday!");
        break;
    case 7:
        console.log("It's Saturday!");
        break;
    default:
        console.log(`${day} is not a day!`);
}
*/
/*
let testScore = 63;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(`${letterGrade}`);
*/

//String Methods
/*
let name = " Rishit ";

//console.log(name.charAt(0));
//console.log(name.indexOf("i")); //returns first index of first occurence
//console.log(name.lastIndexOf("i"));
//console.log(name.length);
name = name.trim();
//name = name.toUpperCase();
//name = name.toLowerCase();
//name = name.repeat(2);
//console.log(name);

//let result = name.startsWith(" ");
//result = name.endsWith(" ");
//result = name.includes(" ");
console.log(result);
*/
/*
let number = "123-456-7890";

//number = number.replaceAll("-", " ");
//number = number.padStart(15, "0"); 
number = number.padEnd(15, "0"); 

console.log(number);
*/

//String Slicing
//Syntax: string.slice(start, end); //ending index is exclusive, starting index is inclusive
/*
const name = "Rishit Shah"

//let firstName = name.slice(0, 7);
//let lastName = name.slice(7);
//let firstChar = name.slice(0, 1);
//let lastChar = name.slice(-1); // negative index works backwards from the end to the start

let firstName = name.slice(0, name.indexOf(" ")); // dynamic
let lastName = name.slice(name.indexOf(" ") + 1);

console.log(lastName);
*/
/*
const email = "mail@mailing.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
*/

//Method Chaining

//Not Using Method Chaining
/*
let username = window.prompt("Enter Your Username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
console.log(username);
*/

//Logical Operators
// &&: and
// ||: or
// !: not
// Pretty standard stuff
/*
const temp = 25;

if(temp > 0 && temp <= 30) {
    console.log("The weather is good");
}
else
    console.log("The weather is BAD!!!");
*/

//Strict Equality
// ===: strict equality operator, checks both value and type
// ==: comparison operator, checks only value, not type
// !==: strict inequality operator, checks both value and type, but returns true if not equal
// !=: inequality operator, checks only value, not type, but returns true if not equal
// =: assignment operator
// Useful when taking user input (default is string)
/*
const PI = 3.14;

if(PI !== "3.14") {
    console.log("That's NOT PI!");
}
else {
    console.log("That's some PI!");
}
*/

//While Loop
// pretty standard stuff, do while also works
let x = 0;

while(x < 5) {
    if(x === 3) {
        x++;
        continue; // skips the rest of the loop and goes to the next iteration
    }
    console.log(`x is ${x}`);
    x++;
}