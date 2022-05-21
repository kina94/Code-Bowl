let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = Number(input);
let answer = 0;

while(true){
    if(n % 5 === 0){
        answer = answer + (n / 5)
        break
    }
    if(n < 3){
        answer = -1
        break
    }
    n = n - 3;
    answer++
}

console.log(answer)

