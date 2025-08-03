/* 
i/p :  a = 10, b = 5  o/p : 10
i/p : a 36, b = 64   o/p : 1088

*/
console.log("Naive Approach : Using conditional loop");

function findLCM1(a, b) {
    let g = Math.max(a, b)
    let s = Math.min(a, b)

    for(let i = g; i < a*b; i+=g) {
        if(i%s === 0) {
            return i
        }
    }
    return a*b
}

console.log(findLCM1(10, 5))
console.log(findLCM1(36, 64));


console.log("Expected Approach: Using GCD LCM formula");

function gcd(a,b) {
    return b === 0 ? a : gcd(b, a%b)
}

function findLCM2(a, b) {
    let ans = a * b / gcd(a,b)
    return ans
}

console.log(findLCM2(10, 5));
console.log(findLCM2(36, 64));