const fs = require('fs');

const data = fs.readFile('userdata.json');
console.log(data);
const uname = fs.argv[2];
const pwd = fs.argv[3];



