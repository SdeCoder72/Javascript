// ---------------------------Hoisting-------------------------------
/* Hoisting is JavaScript's behavior of knowing about a variable or function's existence before executing the code. How it treats that knowledge depends on the keyword (function, var, let or const). */

// https://www.notion.so/Lecture-10-JS-Code-Execution-2853a78e0e2280a8a3c2e21a712ebd43


// Execution Context 

// Memory allocation 
// a = undefined
// b = undefined
// addNumber funcCode
// ans1 = undefined
// ans2 = undefined

// Execution phase 

var ans1 = addNumber(a,b);
console.log(ans1);
var a = 10;
var b = 20;

var ans1 = addNumber(a,b);
console.log(ans1);
function addNumber(n1, n2) {
    var sum = n1+n2;
    return sum;
}

var ans1 = addNumber(a,b);
var ans2 = addNumber(5, 8);
// console.log(ans1, ans2);