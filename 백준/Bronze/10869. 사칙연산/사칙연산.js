const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);