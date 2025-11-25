const arr = [1, 2, 55, 6, 3]
console.log(arr.slice(1, 3));  // doesn't change the original array  (1-inclusive : 3-exclusive)
// console.log(arr);

console.log(arr.splice(1,3));  // remove/trip out the original array  (1-inclusive : 3-inclusive )
console.log(arr);

// splice(trimFrom, TrimTill, eleInsert, eleInsert, eleInsert....)

const arr2 = [2, 4, 6, 7, 9, 2]
const a = arr2.splice(2, 3, "Shanaya", 87)
console.log(arr2);
console.log(a);

const arr3 = [3, 6, 3,6]
const arr4 = [5, 8, 2]

// arr3.push(arr4)
// console.log(arr3);

const a5 = arr3.concat(arr4)  // doesn't modify original arr
console.log(a5);  

const arr6 = [arr, arr2, arr3, arr4]
console.log(arr6);

//spread operator
const a7 = [...arr, ...arr3, ...arr4]
console.log(a7);