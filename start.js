//console.log(process.pid);
//console.log(process.env);

// console.log(process.argv);

// process.on('exit', (code) => {
//     console.log(code)
// });

const path = require("path");

console.log(path.join('first', 'second', 'third'));

console.log(path.join(__dirname, 'first', 'second', 'third'));
