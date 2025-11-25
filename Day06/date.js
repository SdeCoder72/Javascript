const newDate = new Date()
const newDate2 = Date()
console.log(newDate);
console.log(typeof newDate);
console.log(newDate2);
console.log(typeof newDate2);

console.log(newDate.toString());
console.log(newDate.toISOString());
console.log(newDate.toLocaleString());

console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getSeconds());
console.log(newDate.getMinutes());
console.log(newDate.getTime());

//  days : Mon(1)...
// Month : January(0)...

// year month date hour minute second millisecond
const date1 = new Date(2025, 10, 18, 20, 56, 34, 98)
console.log(date1);
console.log(date1.toString());
console.log(date1.toLocaleString());

const date2 = Date.now()
console.log(date2);  //returns in milliseconds
console.log(new Date(date2));
console.log(new Date(date2).toLocaleString());
console.log(new Date(date2).toUTCString());

// console.log(Date(date2));  // always returns current date whether you put diff value to it
console.log(new Date(0));
console.log(new Date(0).toLocaleString());

// console.log(Date(0));   // always returns current date whether you put diff value to it
