const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const list = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(list.join(' '));