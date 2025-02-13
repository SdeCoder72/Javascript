const character = "#"; //You can change the character by any symbol you like
const count = 10; //increase or decrease the size of pyramid
let rows = [];
let inverted = false;

function padRow(newNumber, newCount) {
    return " ".repeat(newCount - newNumber) + character.repeat(2 * newNumber - 1) + " ".repeat(newCount - newNumber);
}

for(let i = 1; i <= count; i++) {
    if(inverted) { 
        rows.unshift(padRow(i, count)); // For inverted Pyramid
    }else {
        rows.push(padRow(i, count));  // For Standard Pyramid
    }
}

let result = "";
for(let row of rows) {
    result = result + row + "\n";
}
console.log(result);