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
/*
let x = 0;

while(x < 5) {
    if(x === 3) {
        x++;
        continue; // skips the rest of the loop and goes to the next iteration
    }
    console.log(`x is ${x}`);
    x++;
}
*/

//For Loop
// Same as java, just use 'let' instead of 'int'
/*
for(let i = 0; i < 5; i++) {
    if(i === 3)
        break; 

    console.log(`Hello`);
}

console.log(`Loop Ended!`);
*/

//Number Guessing Game
/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}:`));
    
    if(isNaN(guess)) {
        window.alert(`Please enter a valid number!`);
        continue;
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}!`);
        continue;
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert(`Your guess is too low!`);
        }
        else if(guess > answer) {
            window.alert(`Your guess is too high!`);
        }
        else {
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts!`);
            running = false; // exit the loop
        }
    }
}
*/

//Functions
/*
function happyBirthday(name, age) {
    console.log(`Happy Birthday ${name}!`);
    console.log(`You are ${age} years old!`);
}

happyBirthday("Bro", 25);
happyBirthday("Espoingbob", 102);
*/
/*
function add(x, y) {
    return x + y;
}

function isEven(num) {
    return num % 2 === 0;
}

let num = add(6, 10);
console.log(`The answer is ${num}`);
console.log(`${num} is ${isEven(num) ? "even" : "odd"}.`);
*/

//Variable Scope
/*
let x = 0; // global variable

func1();
func2();

function func1() {
    console.log(x);
}

function func2() {
    let x = 2; // local variables used first if available
    console.log(x);
}
*/

//Temp Conversion Program
/*
const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toF.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `Temperature in Fahrenheit: ${temp.toFixed(2)}°F`;
    }
    else if(toC.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `Temperature in Celsius: ${temp.toFixed(2)}°C`;
    }
    else {
        result.textContent = 'Select a Unit!';
    }
}
*/

//Arrays
/*
let fruits = ["apple", "orange", "banana"];

fruits[0] = "kiwi"; // change first element
fruits[3] = "mango"; // add new element at index 3
fruits.push("grape"); // add new element at the end
fruits.pop(); // remove last element
fruits.unshift("strawberry"); // add new element at the beginning
fruits.shift(); // remove first element
fruits.sort(); // sort the array in alphabetical order
fruits.reverse(); // reverse the array

for(let fruit of fruits) {
    console.log(fruit);
} // for each loops for the win!

//console.log(fruits);
console.log(fruits.length);
console.log(fruits.indexOf("banana")); // returns -1 if not found
console.log(fruits.includes("kiwi")); // returns true or false
*/

//Spread Operator
// ...: spreads the elements of an array or iterable (e.g. string) into another array or into separate variables
/*
let number = [1, 2, 3, 4, 5];
let max = Math.max(...number);
let min = Math.min(...number);

let name = "Rishit";
let letters = [...name]; // spreads the characters of the string into an array

let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "broccoli", "spinach"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; // shallow copy of array fruits and vegetables

console.log(foods);
*/

//Rest Parameters
// ...: collects the remaining arguments into an array
// Basically the opposite of the spread operator
/*
function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";
const food4 = "salad";

//openFridge(food1, food2, food3, food4); // collects all arguments into an array

const foods = getFood(food1, food2, food3, food4);
console.log(foods); // returns an array of all arguments

function combineStrings(...strings) {
    return strings.join(" ");
}

let name = combineStrings("Rishit", "Shah");
console.log(name);
*/

//Dice Roller Program
/*
function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/Dice-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Results: ${values.join(" ")}`;
    diceImages.innerHTML = images.join("");
}
*/

//Random Password Generator Program
/*
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";  
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length <= 0) {
        return "Password length must be greater than 0.";
    }

    if(allowedChars.length === 0) {
        return "At least one character type must be selected.";
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);

        password += allowedChars[randomIndex];
    }

    return password;
}

const passLength = 1000;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
document.getElementById("passField").textContent = password;
*/

//Callbacks
// A function that is passed as an argument to another function and is executed after the completion of that function

/*
hello(wait);

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("Wait!");
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye!");
}
*/

/*
sum(displayPage, 5, 10);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayResult(result) {
    console.log(`The sum is: ${result}`);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = `The sum is: ${result}`;
}
*/

//forEach()
// Used to iterate over arrays, similar to for of loop
// Syntax: array.forEach(callback(element, index, array))
// The callback function is called for each element in the array, with the element, index, and the array itself as arguments
/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}
*/

//.map()
// Used to !create a new array! with the results of calling a function on every element in the original array
// Syntax: array.map(callback(element, index, array))
/*
const numbers = [1, 2, 3, 4];
const squares = numbers.map(square);

function square(element) {
    return element * element;
}

console.log(squares);
*/
/*
/*
const dates = ["2025-1-3", "2024-12-25", "2023-11-11"];

function formatDates(element) {
    const [year, month, day] = element.split("-");
    return `${day}/${month}/${year}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
*/

//.filter()
// Creates a new array by filtering out elements
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);

function isEven(element) {
    return element % 2 === 0;
}

console.log(evenNums);
*/

//.reduce()
// Reduces elements in an array to a single value
/*
const prices = [10, 20, 30, 40, 50];
const total = prices.reduce(sum);
const max = prices.reduce(getMax);
const min = prices.reduce(getMin);

function sum(accumulator, element) {
    return accumulator + element;
}

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}

console.log(`Total Price: $${total.toFixed(2)}`);
console.log(`Max Price: $${max.toFixed(2)}`);
console.log(`Min Price: $${min.toFixed(2)}`);
*/

//Function Expressions
// Functions can be assigned to variables
/*
const hello = function() {
    console.log("Hello!");
}
*/
/*
//hello();
setTimeout(function(){
    console.log("Hello!");
}, 3000);
*/

//Arrow Functions
// Syntax: (parameters) => { code } // curly braces only for multiple lines
/*
const hello = (name, age) => {
    console.log(`Hello, ${name}!`);
    console.log(`You are ${age} years old!`);
}

hello("Rishit", 22);
*/

//setTimeout(() => console.log("Hello!"), 3000);
/*
const numbers = [1, 2, 3, 4, 5];

const evenNums = numbers.filter((element) => element % 2 === 0);
const sum = numbers.reduce((accumulator, element) => accumulator + element);

console.log(`Even Numbers: ${evenNums}`);
console.log(`Sum: ${sum}`);
*/

//Objects
// Objects are collections of related properties and methods
// Regular OOP stuff
// Syntax: let objectName = {key: value, function()}
/*
const person1 = {
    firstName: "Spoingbob",
    lastName: "Sqgburarepants",
    age: 102,
    isEmployed: true,
    imReady: function() {console.log("I'm ready!");}
}

const person2 = {
    firstName: "Pabrick",
    lastName: "Stdar",
    age: 25,
    isEmployed: false,
    greeting: () => {console.log('This is Patrick!')}
}

console.log(person1.firstName);
person1.imReady();
console.log(person2.firstName);
person2.greeting();
*/

//this
// Reference to the object where 'this' is used
// the object's value depends on the immediate context
/*
const person1 = {
    name: "Spongebob",
    favFood: "Krabby Pattys",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I love ${this.favFood}!`);
    }
}

const person2 = {
    name: "Patrick",
    favFood: "Seaweed",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I love ${this.favFood}!`);
    } //when using arrow functions, 'this' refers to the global object, not the object itself
}

person1.greet();
person2.greet();
*/

//Constructor
// Special method for defining the properties and methods of objects
/*
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {console.log(`You are driving the ${color} ${year} ${make} ${model}`)}
}

const car1 = new Car("Toyota", "Camry", 2010, "white");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
*/

//Class
// (ES6 feature) provides a more structured and cleaner way to work with objects compared to
// tradtional constructor functions
/*
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    } // Don't need to use function keyword inside class

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 29.99);
const product3 = new Product("Socks", 9.99);

product1.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total Price with Tax: $${total.toFixed(2)}`);
*/

//static
// keyword that defines properties or methods that belong to a class itself rather than the objects
// created from that class
/*
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // don't need an object to get this property
console.log(MathUtil.getDiameter(10)); // don't need an object to use static methods
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
*/
/*
class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online.`);
    }

    sayHello() {
        console.log(`Hello! My username is ${this.username}`);
    }
}

const user1 = new User("Spoingbob");
const user2 = new User("Pabrick");
const user3 = new User("Samby");

user1.sayHello();
console.log(user1.userCount); // returns undefined since userCount only is available to the class and not it's objects
User.getUserCount();
*/

//Inheritance
/*
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    static name = "rabbit";

    run() {
        console.log(`This ${this.name} is running!`);
    }
}

class Fish extends Animal {
    static name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming!`);
    }
}

class Hawk extends Animal  {
    static name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
*/

//super
// keyword used in classes to call the constructor or access the properties 
// and methods of a parent / super class
/*
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at ${speed}mph`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbi", 1, 25);
const fish = new Fish("fishy", 2, 12);
const hawk = new Hawk("tuah", 5, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
*/

//Getters and Setters
/*
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth; // here _width means that width is a private property
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if(newHeight > 0 && typeof newHeight === "number") {
            this._height = newHeight; // here _width means that width is a private property
        } // the typeof check is not really necessary in practice, just for reference here
        else {
            console.error("Width must be a positive number");
        }
    }

    get width() {
        return this._width.toFixed(1);
    }

    get height() {
        return this._height.toFixed(1);
    }

    get area() {
        return (this._width * this._height).toFixed(1);
    } // get method allows you to get values that are not prespecified variables as if they were variables
} 

const rectangle = new Rectangle(4, 5);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

//Destructuring
// Extracts values from arrays and objects, then assign them to variables in a easy way
// [] used to perform array destructuring
// {} used to perform object destructuring
/*
// Example 1: Swaping variables
let a = 1;
let b = 2;

[a, b] = [b, a]; // LHS [a, b] uses destructuring and RHS makes an array containing b then a

console.log(a);
console.log(b);
*/
/*
// Example 2: Swaping elements in array
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

// Example 3: Assigning array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors; 
// Here the rest parameter (...) is used to store remaining colors in another array called 'extraColors'

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

// Example 4: Extract values from objects
/*
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrcik",
    lastName: "Star",
    age: 30,
}

const {firstName, lastName, age, job="Unemployed"} = person2; // "Unemployed" here is a default value
// names of destrucutred variables need to be same as those in the objects
/*
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

// Example 5: Destructure in function parameters
/*
function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person2);
*/

//Nested Objects
// Objects in objects
/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "Cooking"],
    address: {
        street: "124 Conch Street",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
//console.log(person.address.street);
//console.log(person.address.city);
//console.log(person.address.country);
for(const property in person.address) {
    console.log(person.address[property]);
}
*/
/*
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person2 = new Person("Patrick", 30, "128 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

console.log(person3.address.street);
*/

//Array of Objects
/*
const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}
];

fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.pop();
//fruits.splice(1, 2);
*/
//console.log(fruits);
//fruits.forEach(fruit => console.log(fruit));
/*
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);
*/
/*
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalFruits);
*/
/*
const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);
*/

//sort
// Method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic (alphabet, numbers, symbols) order
// Treats all values as strings by default
/*
let fruits = ["apple", "oragne", "banana", "coconut", "pineaple"];
let number = [1, 3, 5, 7, 4, 10, 9, 8, 6, 2];
fruits.sort();
number.sort((a, b) => a - b); // ascending order (flip a and b for descending)

console.log(number);
*/
/*
const people = [
    {name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 32, gpa: 1.5},
    {name: "Squidward", age: 40, gpa: 3.5},
    {name: "Sandy", age: 27, gpa: 4.0}
];

//people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name)); // used to sort strings in alphabetical order

console.log(people);
*/

//Array Shuffle
// Fisher-Yates Algorithm
/*
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1)); 
    
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);

console.log(cards);
*/

//Date Objects
// Objects that contain values that represent dates and times, they can be changed and formatted
// Date(year, month, day, hour, minute, second, ms)
// Date() returns current date value by default
/*
//const date = new Date(2024, 0, 1, 2, 3, 4, 5);
//const date = new Date("2024-01-02T12:00:00Z");
//const date = new Date(1000000000000); // ms since epoc (date when computer thinks time began) 
const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();

//console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);
console.log(dayOfWeek);
*/
/*
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1) {
    console.log("Happy New Year!");
}
*/

//Closure
// A function defined inside of another function, the inner function can access the variables 
// and scope of the outer function. Allow for private variables and state maintentance
// Used frequently in React, Vue, and Angular
/*
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
*/
/*
function createCounter() {
    let count = 0;
 
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    //return {increment}; // Same as return {increment:increment}, returns object with increment function
    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is: ${counter.getCount()}`);
*/
/*
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
*/

//setTimeout()
// Function in JS that allows you to schedule the execution of a function after
// an amount of time (in miliseconds). Times are approximate (they vary based on 
// the workload of the JS runtime environment)
// Syntax: setTimeout(callback, delay);
// clearTimeout(timeoutID) = can cancel a timeout before it triggers
/*
function sayHello() {
    window.alert("Hello!");
}

//setTimeout(sayHello, 3000);
//setTimeout(function(){window.alert("Hello")}, 3000);
const timeoutID = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutID);
*/
/*
let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Timer Started!");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log(`Timer ${timeoutId} Cleared!`);
}
*/

//Digital Clock Program
/*
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
*/

//Stopwatch Program
/*
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    miliseconds = miliseconds.toString().padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
*/

//ES6 Module
// An external file that contains reusable code that can be imported into other JS files.
// Can contain variables, classes, functions, etc.
/*
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);
*/

//Asynchronous Code
// Synchronous code executes line by line consecutively in a sequential manner.
// This code waits for previous operations to complete execution.
// Asynchronous code allows multiple operations to be performed concurrently without waiting.
// (I/O operations, network, requests, fetching data)
// Handled with: Callbacks, Promises, Asynch/Await
/*
function func1(callback) {
    setTimeout(() => {console.log("Task 1");
                      callback();}, 3000); // setTimeout is an asynchronous function
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2); // executes function 2 only after function 1 is complete
*/

//Error Handling
// Error is an object that is created to represent problems that occur.
// Usually occur with user input or establishing connections.
// Network Errors
// Promise Errors
// Security Errors
// try{} catch{} finally{}
/*
try {
    console.lag("Hello");
}
catch(error) {
    console.error(error); // console.log can be used, but .error highlights errors better
}
finally {
    // optional, always executes, even if an error does not occur
    // used for cleanup, closing files, closing connections, or releasing resources
    console.log("This always executes!");
}

console.log("You have reached the end!");
*/
/*
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by 0!");
    }
    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number!");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.log(error);
}

console.log("You have reached the end!");
*/

//Calculator Program
/*
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); // DO NOT USE THIS SHIT IN REAL LIFE, IT CAN BE USED AS A BACKDOOR
    }
    catch {
        display.value = "Error";
    }
}
*/

//DOM
// Document Object Model: Object{} that represents the page you see in the web browser.
// Provides you with an API to interact with it. The web browser constructs the DOM when
// it loads an HTML document, and structures it in a tree-like representation.
// JS can access the DOM to dynamically change the content, structure, and style of a web page.

//console.log(document); // logs the entire webpage
//console.dir(document); // logs all the properties of the document

//document.title = "My Website";
//document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
/*
const username = "Bro";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
*/

//Element Selectors
// Methods used to target and manipulate HTML elements.
// They allow you to select one or multiple HTML elements from the DOM
// Selector                     Returns
// .getElementById()            Element or NULL (if element not found)
// .getElementsByClassName()    HTML Collection
// .getElementsByTagName()      HTML Collection
// .querySelector()             First Element or NULL
// .querySelectorAll()          Nodelist

/*
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);
*/

//const fruits = document.getElementsByClassName("fruits");

//fruits[0].style.backgroundColor = "yellow"; 
//fruits[0].textContent = "Kiwi";

/*
for(let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}
*/
/*
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});
*/
// HTML collections don't have many built in functions, so to use array functions like forEach,
// it needs to be type cast as an array first

//console.log(fruits);
/*
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements) {
    liElement.style.backgroundColor = "lightgreen";
}
*/
//console.log(h4Elements);
/*
const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";
*/
/*
const fruits = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

//fruits[0].style.backgroundColor = "yellow";
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
}); // Nodelists have forEach built in

console.log(foods);
*/

//DOM Navigation
// The process of navigating through the sturcture of an HTML document using JS.
// .firstElementChild
// .lastElementChild
// .previousElementSibling
// .parentElement
// .children

//const element = document.getElementById("fruits");
//const firstChild = element.firstElementChild;
//const ulElements = document.querySelectorAll("ul");

//firstChild.style.backgroundColor = "yellow";
/*
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
*/
/*
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
*/
/*
const element = document.getElementById("vegtables");
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling; // both next and previous sibling do not loop

//nextSibling.style.backgroundColor = "yellow";
previousSibling.style.background = "yellow";
*/
/*
const element = document.getElementById("apple");
const parent = element.parentElement;

parent.style.backgroundColor = "yellow";
*/
/*
const element = document.getElementById("fruits");
const children = element.children; // returns HTML collection

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
}); // can also access using index numbers

//console.log(children);
*/

//Add & Change HTML

// Step 1: Create the element

//const newH1 = document.createElement("h1");
//const newListItem = document.createElement("li");

// Step 2: Add attributes/properties
/*
newH1.textContent = "Hello!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
*/
/*
newListItem.textContent = "pear";
newListItem.id = "pear";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
*/
// Step 3: Append the element to DOM

//document.body.append(newH1); // append adds to the end, makes it the last child
//document.body.prepend(newH1); // prepend adds to the top, makes it the first child
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2); // insertBefore(newElement, oldElement), moves old element down and puts new element in its place

//const boxes = document.querySelectorAll(".box"); // creates nodelist of boxes
//document.body.insertBefore(newH1, boxes[1]); // usefull when an id is not given to each child in a class

//document.body.append(newListItem);
//document.body.prepend(newListItem);
//document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

//const orange = document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newListItem, orange); 
// Turns out chromium browsers automatically make global variables for elements with and without an ID
// in its DevTools, so just putting the id of the variable technically works, but only for testing purposes
// and only on chromium based browsers. 
/*
const fruitslist = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, fruitslist[2]);
*/
// Remove HTML Element

//document.body.removeChild(newH1);
//document.getElementById("box1").removeChild(newH1); // when element to be removed is not directly in another element
//document.getElementById("fruits").removeChild(newListItem);

//Mouse Events
// eventListener: listens for specific events to create interactive web pages
// events include click, mouseover, mouseout, etc.
// Syntax: .addEventListener(event, callback);
// Emoji Shortcut: Start Key + . (period)

//const myBox = document.getElementById("myBox");
//const myButton = document.getElementById("myButton");

/*
function changeColor(event) {
    //event object is automatially returned by the browser when something happens
    //console.log(event);

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "You Clicked Me! 🫠";
}
*/
/*
myBox.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "You Clicked Me! 🫠";
});
*/
/*
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "You Clicked Me! 🫠";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "YES CLICK ME! 👼🏿";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me! 😊";
});
*/
/*
myButton.addEventListener("click", event => {
    //event.target.style.backgroundColor = "tomato";
    //event.target.textContent = "You Clicked Me! 🫠";
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "You Clicked Me! 🫠";
});

myButton.addEventListener("mouseover", event => {
    //event.target.style.backgroundColor = "pink";
    //event.target.textContent = "YES CLICK ME! 👼🏿";
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "YES CLICK ME! 👼🏿";
});

myButton.addEventListener("mouseout", event => {
    //event.target.style.backgroundColor = "lightgreen";
    //event.target.textContent = "Click Me! 😊";
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me! 😊";
});
*/

//Key Events
// events: keydown, keyup [DO NOT USE keypress]
/*
const myBox = document.getElementById("myBox");
const movementAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    //console.log(`Key Down: ${event.key}`);
    myBox.textContent = "😥";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    //console.log(`Key Up: ${event.key}`);
    myBox.textContent = "🦦";
    myBox.style.backgroundColor = "lightgreen";
});

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")) {
        event.preventDefault(); // lets the element move off screen without us following it

        switch(event.key) {
            case "ArrowUp":
                y -= movementAmount;
                break;
            case "ArrowDown":
                y += movementAmount;
                break;
            case "ArrowLeft":
                x -= movementAmount;
                break;
            case "ArrowRight":
                x += movementAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
*/

//Show / Hide HTML
/*
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    
    //if(myImg.style.display === "none") {
    //    myImg.style.display = "block";
    //    myButton.textContent = "Hide";
    //}
    
   if(myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else {
        //myImg.style.display = "none"; // does not save the space of the image
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});
*/

//Nodelists
// Static collection of HTML elements by (id, class, element). Can be created by using
// querySelectorAll(). Similar to an array, but no (map, filter, reduce).
// Nodelist won't update to automatically reflect changes

//let buttons = document.querySelectorAll(".myButtons");

// Add new element
/*
const newButton = document.createElement("button");
newButton.textContent = "Button 5"
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
*/
// Add HTML/CSS Properties
/*
buttons.forEach(button => {
    button.style.backgroundColor = "forestgreen";
    button.textContent += '🐱'
});
*/
// Click event listener
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});
*/
// Mouseover + mouseout listener
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightgreen";
    });

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "forestgreen";
    });
})
*/
// Remove an element
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); // only removes it from DOM
        buttons = document.querySelectorAll(".myButtons"); // updates nodelist
        console.log(buttons);
    });
});
*/
//console.log(buttons);

//classList
// Element property in JS used to interact with an element's list of classes (CSS classes).
// Allows you to make reusable classes for many elements across your webpage.
// add()
// remove()
// toggle(remove if present, add if not present)
// repalce(oldClass, newClass)
// contains()

//const myH1 = document.getElementById("myH1");
//const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");

/*
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/
/*
myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🥵";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🥵";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});
*/
/*
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});
*/
/*
buttons.forEach(button => {
    button.classList.remove("enabled");
});
*/
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🥵";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
*/

//Rock Paper Scissors Program
/*
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("compScoreDisplay");
let playerScore = 0;
let compScore = 0;

function playGame(playerChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === compChoice) {
        result = "It's a Tie!"
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (compChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (compChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    compDisplay.textContent = `Computer: ${compChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
    }
}
*/

//Image Slider
/*
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initSlider); // waits for all DOM content to load before displaying slider

function initSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
*/

//Callback Hell
// A situation in JS where callbacks are nested within other callbacks to the point where
// the code is difficult to read. We can use promises + async/await to avoid it.
/*
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 1500);
}

// Simple example of callback hell
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All Tasks Complete"));
        });
    });
});
*/

//Promise
// An object that manages asynchronous oeprations.
// You can wrap a Promise object round asynchronous code
// "I promise to return a value"
// Pending -> Resolved or Rejected
// Syntax: new Promise((resolve, reject) => {asynchronous code})
// resolve if code successfull, reject if not
// Do these chores in order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash
/*
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            
            if(dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You didn't walk the dog!");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            
            if(kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You didn't clean the kitchen!");
            }
        }, 2500); 
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            
            if(trashTakenOut) {
                resolve("You take out the trash 🗑️");
            }
            else {
                reject("You didn't take out the trash!");
            }
        }, 500);
    }); 
}
*/

/* // Callback Hell
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!"));
    });
});
*/

/*
// Method Chaining
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));
// method chain continues until end or error occurs
*/

//Async / Await
// Async = Makes a function return a prommise
// Await = makes an async fucntion wait for a promise
// Allows you to write asynchronous code in  a synchronous manner.
// Async doesn't have resolve or reject parameters.
// Everything after Await is placed in an event queue.
/*
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            
            if(dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You didn't walk the dog!");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            
            if(kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You didn't clean the kitchen!");
            }
        }, 2500); 
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            
            if(trashTakenOut) {
                resolve("You take out the trash 🗑️");
            }
            else {
                reject("You didn't take out the trash!");
            }
        }, 500);
    }); 
}

async function doChores() {
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    }
    catch(error) {
        console.error(error);
    }
}

doChores();
*/

//JSON Files
// JSON (Javascript Object Notation) is a data-interchange format used for exchaning data between
// a server and a web application.
// JSON files can be formatted as: {key:value} OR [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object
/*
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true}, 
                     {"name": "Patrick", "age": 35, "isEmployed": false},
                     {"name": "Squidward", "age": 40, "isEmployed": true},
                     {"name": "Sandy", "age": 25, "isEmployed": false}]`;

//const jsonString = JSON.stringify(people);

//console.log(jsonString);

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);
*/
/*
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));
// here, fetch and response.json both return promises
*/

//fetch
// Function used for making HTTP requests to fetch resources (JSON style data, images, files).
// Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve
// and send data asynchronously over the web.
// Syntax: fetch(url, {options})
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));
*/

fetchData();

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error) {
        console.error(error);
    }
}