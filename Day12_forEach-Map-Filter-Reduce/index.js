// forEach, filter, reduce , map, set

const arr = [10, 20, 30, 40,];

arr.forEach((num)=>{
    console.log(num);
})
let sum = 0;
arr.forEach((num) => {
    sum += num;
})
console.log("Sum : " + sum);

// filter 

const newArr = arr.filter((num) => num < 25)
console.log(newArr);  // returns a new array
// can add methed on the entire array object but not recommended 
Array.prototype.myFilter = function(compare) {
    let ans = [];
    for(let num of this) {
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}
let arr2 = arr.myFilter((num) => 25<num);
console.log(arr2);

// map

const arr3 = arr.map((num)=> num/10);
console.log(arr3);

