function solution(d, budget) {
    var answer = 0;
    let cnt = 0;
    d = d.sort((a, b) => a - b)
    let sum = 0

    for (let i = 0; i < d.length; i++) {
        sum += d[i]
        cnt+=1
        if(sum>budget){
            cnt = cnt - 1
        }
    }
    answer=cnt
    return answer;
}

let d =[2,2,3,3]	
let budget = 10
solution(d, budget)