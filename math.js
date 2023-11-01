const fs = require("fs");
const a = process.argv[2];
const b = process.argv[3];

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}
function sub(a, b) {
  return parseInt(a) - parseInt(b);
}
function mult(a, b) {
  return parseInt(a) * parseInt(b);
}
function div(a, b) {
  if (b == 0) {
    console.log("Error: Division by zero is not allowed");
  } else {
    return parseInt(a) / parseInt(b);
  }
  
}

// fs.append(`The result is ${sum(a,b)}`);
fs.appendFile("ans.txt", `\nThe result is sum: ${sum(a, b)} \n sub: ${sub(a, b)} \n mult: ${mult(a, b)} \n div: ${div(a, b)} \n`, (err) => {
  if (err) {
    console.error(`Error appending Hello ${sum(a, b)}`, err);
  } else {
    console.log(`\nThe result is sum: ${sum(a, b)} \n sub: ${sub(a, b)} \n mult: ${mult(a, b)} \n div: ${div(a, b)} \n`);

  }
});
