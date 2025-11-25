let marks = [43, 76, 98, 34, 78]
console.log(marks);
console.log(marks.length);

// any data type can be stored in array in js

let arr1 = [45, null, undefined, "Shanaya", true]
console.log(arr1[4]);

// arrays are mutable
// console.log(typeof arr1);
arr1[3] = "Anaya";
arr1[1] = false
console.log(arr1);

// adding element at the end

arr1.push(98)
arr1.push("Rahul")
console.log(arr1);

// deleting element from end

arr1.pop()
console.log(arr1);

//adding element from the starting of the array

arr1.unshift(100)
console.log(arr1);

// deleting/removing ele from the starting of the array
arr1.shift()
console.log(arr1);

// it's not preferable to shift and unshift an ele b'coz it reduces the performance

const arr2 = [65, 34, 87, 97, 34]

for(let i = 0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

for(let ele of arr2) {
    console.log(ele);
}

let arr3 = arr2;

arr3.push(100)
console.log(arr2);


// Object (non-primitive): Copy by ReferenceError
// primitive: Copy by value


const a4 = [4, 7, 3, 8, 3]
// a4 = [5,8,2]  // ERROR: constant arr cannot be change entirely
// a4[4] = 100   // allowed
console.log(a4);