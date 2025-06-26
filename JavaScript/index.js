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

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); //any non-number string to a number becomes NaN, unless empty
y = String(y); //no change
z = Boolean(z); //non-empty values is always true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);