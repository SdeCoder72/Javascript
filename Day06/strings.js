// String
const str1 = "Shanaya";
const str2 = "Anaya"
const str3 = `Hello ${str1}!`
console.log(str3);

const str = "Hello JavaScript! Hello Programming!"
console.log(str.length);
console.log(str[0]);
// str4[2] = "56";  // immutable
console.log(str);

console.log(str.toUpperCase());  // not affecting the original str4
console.log(str.toLowerCase());


// finding substring
console.log(str.indexOf("lo")); // returns the index of the given string in str4 (not found = returns -1)
console.log(str.lastIndexOf("lo"));
console.log(str.includes("lo"));  // returns boolean values
console.log(str.includes("Lo"));

// slicing the string
console.log(str.slice(4, 10)); // 4- inclusive , 10 - exclusive
console.log(str.slice(6));  // start from 6 till end
console.log(str.slice(-5));
console.log(str.slice(-9, -2));

console.log(str.substring(4, 12));  //same as slice except you can't give -ve value

const a = "Shanaya"
const b = "Naaz"
console.log(a + " " + b);

console.log(46+a);
console.log(46+a+64);
console.log(46+ 55+a+64);

// replace
console.log(str.replace("Hello", "Hi"));
console.log(str.replaceAll("Hello", "Hi"));

//trim 

const s = "    Shanaya    "
console.log(s.trim());

//split
const name = "Wednesday, Enid, Thing, Tyler"
const name2 = "Wednesday Enid Thing Tyler"
console.log(name.split(","));  // returns an array
console.log(name.split(" "));




