function solution(price, money, count) {
    var answer = 0;
    for(let i=1; i<=count; i++){
        answer+=price*i
    }
    answer = money-answer
    if(answer>=0){
        answer = 0
    } else {
        answer = -answer
    }
    return answer;
}

let price = 3
let money = 20
let count = 3
solution(price, money, count)