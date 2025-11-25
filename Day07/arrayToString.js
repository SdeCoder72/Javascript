const arr = ["Shanaya", "Anaya", "Thing", "Wednesday"]
console.log(arr.toString()); // convert into string
console.log(arr.join(" * "));
console.log(arr.indexOf("Thing")); // prints 1st occurance of given parameter if not present then prints -1
console.log(arr.includes("Shanaya"));
console.log(arr.sort());
console.log(arr.reverse());

const a = [45, 76, 87, 45, 10001]  // treating as character and checking one by one b'coz js array contains different types of data
console.log(a.sort());

const ar = [43, 65, 87, 12, 10001, 499]

//ascending order
ar.sort((a, b)=>a-b);  //-ve: a-first b-second, +ve: b-first a-second
console.log(ar);

//decending order
ar.sort((a, b)=>b-a);
console.log(ar);
//or
console.log(ar.reverse());

const arrr = [45, 34, 76, [34,[54, 1, 2, 5], 65], 76, 4]
console.log(arrr[3][1][2]);
console.log(arrr.flat(2)); // parameter defines how much level deep you want to flat the array (if you don't know the depth then set .flat(infinity))

console.log(arrr.flat(Infinity));  // returns new array
console.log(arrr.flat());  // returns new array