//Function declaration
greet()  // no ERROR
function greet() {   // we can call this function before its initialization
    console.log("Hello World");
}
greet();

function add(n1, n2) {
    console.log(n1 + n2);
}
add(4, 9);
console.log(add);

let a = 4;
let b = a;
b = 6;
console.log(a+ " " +  b);

//rest operator
function addNumber(...num) {
    let sum = 0;
    for(ele of num) {
        sum += ele;
    }
    console.log(sum);
}

addNumber(2, 5, 2);
addNumber(2, 5);
addNumber(2, 5, 8, 4, 3);

// function: expression
// console.log(sum2(5, 9));  // ERROR
const sum2 = function(n1, n2) {  // we cannot call this function(variable holding a function) before its creation
    return n1 + n2;
}
console.log(sum2(5, 8));   
console.log(sum2);

//arrow function
const greeting = ()=> {   // similar to normal function just syntax difference
    console.log("Hello World");
}
greeting()

// make it shorter for one return
const numSum = (n1, n2)=> n1+n2;

console.log((numSum(9, 8)));

// if one parameter is given, then no need of parentheses ()
const square = n => n*n;
console.log(square(6));

const greeting2 = () => {
    return {
        name:"Shanaya",
        age: 20
    }
}
const greeting3 = () => ({name:"Shanaya", age: 20});  // to return an obj, use parentheses, kyuki function m v {} hote to function confuse ho jata h {} k andar return statement present to h hi nhi.
console.log(greeting3());
// IIFE - Immediately Invoke Function Execution

(function hi() {
    console.log("Hi Shanaya");
})();

(()=> {
    console.log("Hi Kavya");
})()

// callback function - function passed inside another function as an argument

function hello() {
    console.log("Hello ");
}
function world(callback) {
    callback(); 
    // why not directly hello()- now you have given hard code, no reusability 
    console.log("World");
    callback()
}

world(hello);



//real world scenerio
function instamart() {
    console.log("Started packing your food.");
}

function swiggyOrderPlaced() {
    console.log("Started preparing your food.");
}

function payment(amount, callback) {
    console.log(`${amount} payment is initializing..`);
    console.log("Received successfully.");
    callback();
}

payment(300, swiggyOrderPlaced)
payment(500, instamart)


