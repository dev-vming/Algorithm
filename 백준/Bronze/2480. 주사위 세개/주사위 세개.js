const input = require("fs").readFileSync("/dev/stdin").toString();

const [A, B, C] = input.split(' ').map(Number).sort((a,b)=>a-b);

if (A === B && B === C) {
  console.log(10000+A * 1000);
} else if (A === B || B === C) {
  console.log(1000 + B * 100);
} else {
  console.log(C * 100);
}