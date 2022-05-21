const fs = require('fs');
let [N, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

let price = nums.shift();
let cnt = 0;

nums.reverse().map(coin=>{
    if(coin>price){
        return
    }
    if(price<=0){
        return
    }
    cnt += Math.floor(price/coin)
    price = price%coin
})

console.log(cnt);