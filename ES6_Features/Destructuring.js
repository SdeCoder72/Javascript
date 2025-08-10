// Destructuring in JS allows you to extract values from arrays or objs and assign them to variables in a concise and readable way.

// 1. Destructuring array
const sports = ["cricket", "badminton", "table tennis", "Hockey"];
const[first, second, third] = sports;
console.log(second);
console.log(third);

// 2. Destructuring objs
const obj = {
    name: "Shanaya", 
    age: 21
};
const {name, age} = obj;
console.log(age);
console.log(name);

// 3. Nested Destructuring
const obj2 = {
    myName: "Ananya",
    age2: 22,
    address: {
        city: "Delhi",
        zip : '110084'
    }
};
const {myName, age2,address, address:{city, zip}} = obj2;
console.log(address);
console.log(age2);
console.log(myName);
console.log(zip);
console.log(city);

// 4. Destructuring function parameters
function greet({name, age}) {
    console.log(`Hello ${name}. You are ${age} years old.`);
}
const person = {name: "Shanaya", age: 21};
greet(person);

// 5. Destructuring with rest syntax
const obj3 = {
    name1: "Riya",
    age1: 23,
    country: "India",
    profession: "Engineer"
};
const {name1, age1, ...more} = obj3;
console.log(name1);
console.log(age1);
console.log(more);