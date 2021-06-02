//alert("Hello World");

// One line comment

/* This is how you do a comment in JS

External JS
We need a JS file.
We need to link that JS file to our html. We still need to use
the script tag

*/
//alert("We are now using external JS");


/*
  Variables

  As of ES6, we do have two ways of creating a variable and also one way for
  creating a constant

  Original method for creating variables is to use var.

  syntax
  var variableName;

  Declaring variables with let
  This was introduced in 2015 in ES6

  let variableName;

*/

var num;
let num2;

//Assignment statements
num = 9;
num2 = 10;

//Variable initialization statement
let total = num + num2;

const PI = 3.14;

let name1 = '"I like programming". Joh\'n said.';

/*
Escape characters
\' single quote
\" double quote
\\ backward slash
\n new line
*/
console.log(name1);

//console.log(num);


/*

Data Types in Java Script
Primitive types
1. String e.g. "This is a String".
A string is a sequence of characters that are enclosed in single quotes or
double quotes.

2. Number e.g. 12/Infinity/ 3.14. In JS, all numbers are floats.

3. Booleam => true or false
4. null
5. undefined

Objects eg {key:value}/ array [1, 2, 4], function


null vs undefined
undefined this means a variable has been declared but has not been assigned
a value yet. Also if a function does not explicitly retgurn a value, then
it ends retuning undefined.

null this is an assignment value. This is used to represent an absence of 
a value. In JS null means nothing.
*/

let sum;
console.log(sum);


/*
Type coercion:
The process of converting one data type to another. This can be implicitly
or explicitly.

JS is a weakly-typed language

2 + 2 = 4
2 + '2' = '22'
'2' + 2 = '22'
'2' + '2' = '22'
'2' - 0 = 2
*/


/* Functions


A function is a block of code that is designed to perform a particular task.
A function is has a name.
And a function is executed when something invokes it.

Because of ES6, we have three different ways of declaring functions in JS
1. function keyword declaration
2. function expression saved in a variable
3. ES6 Arrow functions


The function keyword declaration
With this, a function is defined with the function keyword, followed by the
function name, followed by parentheses()
Function name can contain letters, digits, underscores, dollar signs. A function
name cannot start with a number

function functionName(parameter1, parameter2, parameter3...paramterM){
    function body. This is the code to be executed when the function is called
}

In Java, this a method.
*/

function test(){
    alert("Hello World");
}

function getSum(num1, num2){
    
    return num1 + num2;
}
/*
function getSum(num1, num2, num3){
    console.log(num1 + num2);
}


Hoisting

Hoisting is JS's default behavior of moving declarations to the top.

When using function functionName(parameters){...} to declare a function, 
this function will hoist to the of the script.
*/
// To call a function, you just use the function name and arguments.

//test();
getSum(90, 20, 30);

x = 10;
console.log(x);
var x;

/*
In JS, a variable can be declared after it has been used. This means
a varaible can be used before it has been declared.


Function expressions (function expression saved in a variable)

A function can be also defined using an expression.
A function expression can be stored into a variable.
After a function has been stored into a variable, the variable can be used
as a function


let variableName = function(parameters){ code to be executed goes here};

variableName(arguments);


*/

let getTotal = function(a, b, c){ return a + b + c};

let y = getTotal(1, 3, 12);
console.log(y);

/*

Arrow functions
Arrow functions is another new way of creating functions. This was added in Es6.
Arrow function allow us to write shorter function syntax.

Syntax for arrrow functions
arrowFunctionName = (parameter) => {
    code to be executed goes here
}


Given the following function expression,

let hello = function(){
    alert("Hello World");
}

convert it into an arrow function.
solution:

*/
let hello = () => {
    let carName = "Toyota"; // This is a local variable
    alert("hello world!!!" + carName);
}

/* Global variables
Variables declared outside of any function have global scope.

*/
//console.log("Outside" +carName);
//hello();

/*

Scope
Local scope and global scope

Local JS Variables
Variables declared within a function, they are local to the function.
Local variables have a function scope. Local variables can only be
access within the function where they are declared.



Arrays

Arrays are used to hold a collection data and in JS arrays can be able to hold
data of different types.

let arrayName = []; // This an empty array
let arrayName1 = [value1, value2, value3,...]
*/

let cunySchools = ["LC", "CCNY", "BCC", "Hostos", "Hunter", 1];

/* to access values from an array, you need the array name and an index.
arrayName[index]


to change a value
arrayName[index] = newValue;
*/

console.log(cunySchools[0]);
console.log(cunySchools.length);

cunySchools[0] = "Lehman College";
console.log(cunySchools[0]);
console.log(cunySchools[cunySchools.length - 1]);

/*
Objects
This is a way of organizing data using key/value pairs.
Objects can contain many values
*/

const car = {
    make: "Toyota",
    model: "Matrix"
    };

/*
Accessing data from objects
bracket notation

objectName["key"]

dot notation
objectName.keyName
*/

// bracket notation
console.log(car['model']);

// dot notation
console.log(car.model);


/*

Functions

Higher-order functions
A higher order function is a function that operates on any other function,
either as arguments(actual parameters) or return them.

function outerFunc(cb){
    return cb();
}

From the example above, what is the higher order function?
outerFunc. This is because outerFunc takes in cb and returns the call of the cb
inside it.

Callback Function
A callback function is any function that is passed into another function as an
argument, which is then called inside the outer function to complete 
some action.

Callback functions can be declared as functions, function expressions,
or even anonymous functions.

function outerFunc(cb){
    return cb();
}
What callback function in the above example?
cb() is the callback function and outerFunc is the higher order function.
*/


function firstFunction(){
    displayAlert("Hello one");
}

function secondFunction(){
    displayAlert("Hello two");
}

function displayAlert(text){
    alert(text);
}


function calculate(num1, num2, callBackFunction){
    var t = num1 + num2;
    callBackFunction(t);
}
secondFunction();
firstFunction();

calculate(1, 10, displayAlert );


/*
Lunch Break. We will be back at 2:00 pm


*/