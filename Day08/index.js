const user= {
    name: "Shanaya",
    age: 21,
    email: "xyz@gmail.com",
    amount : 45000,

}

console.log(user.age);
user.contact = 5432345654;
user.amount = 500000;

console.log(user);
delete user.amount;
console.log(user);

// pass by reference

const obj = user;

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//not recommended
for(let keys in user) {
    console.log(keys, user[keys]);  // user.keys give you undefined bcoz it'll gonna search the exact name "keys" inside user   

}

//destructing  object
const {name, age} = user;
const {email: userEmail, amount : userAmount} = user;
console.log(userEmail);
console.log(name);
console.log(age);


// destructing array
const arr = [1, 2, 3, 4, 5];
const [first, second, third] = arr
console.log(first);

// for of loop uses in array
// Object.keys(user)  // returns an array of Object keys
for(let keys of Object.keys(user)){
    console.log(keys);
}
for(let val of Object.values(user)){
    console.log(val);
}
for(let keyVal of Object.entries(user)){
    console.log(keyVal);
}
for(let [keys, val] of Object.entries(user)){
    console.log(keys, val);
}

const user2 = {
    name: "Anaya",
    email: "fh@gmail.com",
    greet: function(){
        console.log(`Hello ${this.name}`);
        return 155;
    },
    address: {
        city: "Delhi",
        pincode: "110054"
    }
}
user2.greet();
console.log(user2.greet());

// shallow copy
const obj2 = {...user2}  // the one level(here: name, email) cannot be changed but the second level can be modified(here: object address)

// numbers as keys are allowed
// keys - string, symbol(ES6)

const symb = Symbol("age");
const user3 = {
    name : "Rahul",
    email : "sffe@gmail.com",
    [symb] : 65
}

console.log(user3[symb]);