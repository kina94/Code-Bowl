const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const p = input[0].split(' ').map(Number).sort((a,b) => a-b);

let answer = 0;
let sum = 0;
p.map(item=>{
    sum+=item
    answer+=sum
})

console.log(answer);