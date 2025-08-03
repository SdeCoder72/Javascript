
function findSum(n) {
    if(n == 0) {
        return 0
    }

    let sum = n * (n+1) /2
    
    console.log(sum);
    return sum
}

findSum(4)