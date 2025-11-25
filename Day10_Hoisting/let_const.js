// console.log(a); ReferenceError: Cannot access 'a' before initialization
// console.log(b); ReferenceError: Cannot access 'b' before initialization

// Memory allocation 
// a = <uninitialised>(Temporal dead zone)
// b = <uninitialised>(Temporal dead zone)
// addNumber = <uninitialised>(Temporal dead zone)
// ans = = <uninitialised>(Temporal dead zone)

// Execution phase 
// a = 10;
// b = 20
// addNumber = funcCode
// ans = 30;


let a = 10;
const b = 20;

console.log(a, b);

// const anss = addNumber(a, b);
// console.log(anss);   ERROR --> ReferenceError: Cannot access 'addNumber' before initialization 

const addNumber = function(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const ans = addNumber(a, b);
console.log(ans);
