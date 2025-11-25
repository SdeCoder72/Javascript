// let a = 50;
// let b = 65.3187;
// b.toFixed(1);
// console.log(b.toFixed(2));  // returns string value / ceiling value
// console.log(typeof b.toFixed(2));
// console.log(b);

// console.log(b.toPrecision(5));  // returns string / ceiling value

// console.log(b.toString());

// // creating number using new keyword

// let a1 = new Number(50);  // rarely used
// console.log(a1);
// console.log(typeof a1);   //object
// let a2 = new Number(50);
// console.log(a1 == a2); // false (refering)

// console.log(Boolean(new String("")));  // true bcoz it's creating an object and storing the value of its address
// console.log(Boolean(""));  // false
// console.log(Boolean(new Number(0)));
// console.log(Boolean(0));
// console.log(Boolean([]));
// console.log(Boolean({name: "Shanaya"}));
// console.log(Boolean(null));  // false bcoz null is an obj which is not storing any value or address
// console.log(Boolean(new Boolean(false))); // true

// // Non-premitive data type compares on the basis of Reference (array, obj etc)
// // Premitive data type copy by value (numbers, boolean etc)

// let b2= 20;
// let b3 = 20;
// let b1 = b2;
// console.log(b2 == b1);
// console.log(b3 == b2);
// console.log(b1 == b3);

// console.log(Math.abs(-5));
// console.log(Math.PI);
// console.log(Math.LN2);
// console.log(Math.sqrt(16));
// console.log(Math.ceil(34.4));
// console.log(Math.floor(34.4));
// console.log(Math.log10(40));
// console.log(Math.max(48,38, 96, 37));
// console.log(Math.random());  // range 0 - 1  (0 inclusive , 1 exclusive)

// // Generate number from 0 to 9
// console.log(Math.floor(Math.random() *10));

// // Generate number from 1 to 10
// console.log(Math.floor(Math.random() * 10)+1); 

// // Generate number from 1 to 6
// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.ceil(Math.random() * 6));

// Math.floor(Math.random()* totalNumberOfOutcomes) + shift
// Math.floor(Math.random()* (max-min+1)) + min (same as above)
// 15-25
console.log(Math.floor(Math.random()* 11) + 15);

//OTP generate - 4 digit: 1000-9999
console.log(Math.floor(Math.random()* (9999 - 1000 + 1))+1000);










