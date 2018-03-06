const path = require('path');
const fs = require('fs');
const solc = require('solc');


const teacherPath = path.resolve(__dirname, 'contracts', 'Teacher.sol');
const source = fs.readFileSync(teacherPath, 'utf8');

console.log(solc.compile(source, 1));


