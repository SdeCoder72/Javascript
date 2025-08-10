// ECMAScipt 2015 - 6th version of the ECMAScipt programming language.

// 1. The let keyword
let n = 10;
{
    let n = 20; // Block-scoped variable
    console.log(n);
}
console.log(n);

// 2. The const keyword
const PI = 3.14159;
console.log(PI);
//PI = 3 // Error : Assignment to constant variable

// 3. Arrow Function
function add1(a, b) {  // traditional function
    return a+b;
}

const add2 = (a,b) => a+b;  // Arrow function Note: do not have their own 'this' context

console.log(add1(3, 5));
console.log(add2(3, 5));

//4. Destructing in JS
// Obj destructing
const obj = {
    name: "Shanaya",
    age: 21
};
const {name, age} = obj;
console.log(name, age);

// Array destruting 

const arr = [1, 2, 4, 5]
const [one, two, four] = arr;
console.log(one, two, four);

// 5. Spread operator
const n1 = [1,2,3];
const n2 = [...n1, 4, 5];
console.log(n2);

// 6. The For/Of loop
const a = [1, 2, 4, 5, 6];    // iterating over an array
for(const num of a) {
    console.log(num);
}

const str = "hello";        // iterating over a String
for(const char of str) {
    console.log(char);
}

// 7. Map and Sets
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));
console.log(map.get("b"));

//set
const set = new Set([1, 2, 2, 3 , 5, 4, 3, 4, 5]);
console.log(set);

// 8. Classes
class Animal{
    speak() {
        console.log("The animal makes a sound");
    }
}
const dog = new Animal();
console.log(dog.speak());

// 9. promises
const fetch = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() =>resolve("Data fetched"), 2000);
    })
};
fetch().then(data => console.log(data));

// 10. Default parameters
function greet(name="Shanaya") {
    return `Hello ${name}!`
}
console.log(greet());