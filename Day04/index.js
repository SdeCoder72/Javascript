//Arithmetic operators

console.log(5+9);
console.log(6-7);
console.log(8*3);
console.log(42/3);
console.log(9%2);
console.log(4**3);

//Assignment operator

let x = 10;
let y = 30;

// += , -+, *=, /=, %=, **=
x += y;
y -= x;
console.log(x);

// Comparison operator

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log("10" == 3+7);
console.log(5 === "5");  // strictly checks the data type

let a = "21";
let num = Number(a);  // conversion string to number
console.log(typeof a + " " + typeof num);

let b = "43atc";
let num2 = Number(b);
console.log(num2);  // Not a Number (NaN)
console.log(typeof b + " " + typeof num2);


// conversion of number to string

let c = 56;
let str1 = String(c);
console.log(str1);
console.log(typeof c + " " + typeof str1);

// conversion of boolean, null and undefined to number

console.log(Number(true));
console.log(Number(undefined));
console.log(null);

// conversion to boolean
console.log("conversion to boolean");
console.log(Boolean("12"));
console.log(Boolean(""));
console.log(Boolean(74));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(Symbol));


// CS problem/challenge

let a1= 0.1;
let b1 = 0.2;
let c1 = a1+b1;
console.log(c1);

// null is loosely = undefined only

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null == false);
console.log(null == true);

// with comparison operator null becomes number, undefined becomes NaN

console.log(null >= 0);
console.log(null <= 0);
console.log(null < 0);
console.log(null > 1);

console.log(null >= undefined);
console.log(undefined >= 0);

// in String, ASCII value is compared
console.log("Shanaya" > "Neha");
console.log("Shanaya" > "neha");

// Whenever we compares any two diff data type, first it converts into number, then comparison happens

console.log(10< true);
console.log(null >= "");
console.log(null > "");
console.log(NaN == NaN);

// for loop

for(let i = 0; i<10; i++) {
    console.log(i);
}

// post increment : i++
// post deceament : i--
// pre incrment : ++i
// pre decreament : --i

// while loop 

let j = 0;
while(j < 10) {
    console.log(j);
    j++;
}

// do while loop
let k = 0;
do {
    console.log(k);
    k++;
}while(k<5);

// if else
let age = 34;
if(age < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}

// if else if else
if(age < 0) {
    console.log("Please enter a valid age.");
}
else if(age < 18) {
    console.log("Minor");
}
else if(age <= 60) {
    console.log("Young");
}
else {
    console.log("Old");
}

// Logical operator
// Logical AND (&&)
// In Logical && : if first value is false, it will return the first value itself
// if first value is true - it will return second value as output
console.log(true && true);
console.log(false && false);
console.log(false && true);
console.log(true && false);

// Logical OR (||)

// if first value is false , it will return the second value
// if first value is true, returns first value itself
console.log(true || true);
console.log(false || false);
console.log(false || true);
console.log(true || false);

let name1 = "Shanaya";
let name2 = "Anaya";
let name3 = name1&&name2;
console.log(name3);


let n1 = "Shanaya";
let n2 = "Anaya";
let n3 = n1||n2
console.log(n3);


// not equal to !=
console.log(4 != 5);
console.log(5 != 5);

//Bitwise operator
// And &, OR |

console.log(2 & 3);
console.log(2 & 5);
console.log(2 | 3);
console.log(2 | 5);

