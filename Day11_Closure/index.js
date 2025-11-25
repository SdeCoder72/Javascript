// Scope and closure, HOF
// 1. Global scope - Accessible to everyone
// 2. Functional scope  - Accesible only to that function (var)
// 3 Block scope -  Accessible only to that block  (let and const)

let a = 10; // Global 
const b = 20;

if(true) {  // block scope
    console.log(a, b); 
}

function greet() {  // functional scope
    let c = 30;
    console.log(a, b);
    console.log(c);
}
greet();
// console.log(c);  // ERROR

let global = 10;
function globalFun() {
    let global = 80;
    console.log(global);
}
globalFun();

// 2nd example
let global2 = 10;
function globalFun2() {
    let global2 = 60;
    console.log(global2);
    function innerFunc() {
        let global2 = 5;
        console.log(global2);
    }
    innerFunc();
}
globalFun2();

// example 3

function counter() {
    function increment() {
        console.log("Hello World! I'm increment function.");
    }
    // increment();
    return increment;  // don't write parenthesis or it will execute at the same time
}
let count = counter();
count();