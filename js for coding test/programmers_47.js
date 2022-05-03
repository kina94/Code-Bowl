function solution(x, n) {
    var answer = [];
    let sum = x
    while(answer.length<n){
        answer.push(sum)
        sum+=x
    }
    return answer;
}

let x = 2
let n = 5
solution(x,n)