//The rest parameter (...) collects multiple values into an array
// Allow function to accept an indefinite number of args as an array

// rest parameter
function myFun1(...args) {
    console.log(args);
}
myFun1(1,2,3,4,5,6);

//Using rest parameter in functions
function sum(...num) {
    return num.reduce((total, n) => total+n, 0);   //reduse method iterates over the array and sums the values. default value = 0
}
console.log(sum(3, 5, 3, 2, 7));

// 1. Collecting function args
function greet(name1, ... restName) {
    return `${name1}, ${restName.join(' and ')}`;
}
console.log(greet("Shanaya", "Rohan", "Ananya"));

// 2. Filtering properties in objects
const {a, ...rest} = {a:1, b:2, c:3};
console.log(a);
console.log(rest);

// 3.Destructuring with Rest
const [first, ...rest2] = [1, 2, 3];
console.log(first); 
console.log(rest2);

//4. Function default parameter
function multi(factor, ...nums) {
    return nums.map(num =>num*factor);
}
console.log(multi(2, 3, 1, 4, 3, 2, 6));
