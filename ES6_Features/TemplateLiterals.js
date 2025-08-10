// Template Literals are string literals that allow embedded expressions (variables) into your code. 
// enclosed by backticks(`)

// 1. Basic example
let a = "Shanaya";
console.log(`Hello ${a}`);

// 2. String Interpolation with Expressions
let x = 8;
let y = 4;
console.log(`The sum of ${8} and ${y} is ${x+y}`);

// 3. Multi-line Strings
const s = `Hello I am Sneha
I am writing a multi-line string
using template literals`;
console.log(s);              // Template Literals preserve line breaks

// 4. Tagged TL
function greet(string, name) {
    return `${string[0]} ${name.toUpperCase()} ${string[1]}`;
}

const name = "Arushi";
console.log(greet`Hello, ${name}!`);   // don't use greet() ---> greet``;

// 5. Escaping backticks and dollor signs
const a2 = `This is a backtick: \` and this is a dollor sign: \$`;
console.log(a2);    

// 6. HTML template 
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);
