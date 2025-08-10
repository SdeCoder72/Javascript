//The spread operator (...arr) in JavaScript is used to expand an array or obj into individual elements. 
// It allows you to easily pass elements from an array as separate args in a function call or combine multiple arr into one
// 1. Expanding arrays
const n = [1, 2, 3, 4, 5];
const n2 = [...n, 7, 8, 9];
console.log(n2);

// 2. Merging Arrays 
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const merge = [...a1, ...a2];
console.log(merge);

// 3. Cloning Arrays
const original = [5, 4, 2, 7];
const clone = [...original];
console.log(clone);

// 4. Combining objs
const obj1 = {a:1, b:2};
const obj2 = {c: 4, b: 6, e: 8};
const combineObj = {...obj1, ...obj2};  // both have the key name "b" but the "b" of obj2 overwrites the value of first one
console.log(combineObj);

