function solution(n) {
    var answer = [];
    n = String(n)
    n = n.split('')
    n = n.reverse()
    n.map(item=>{
        answer.push(Number(item))
    })
    return answer;
}

let n = 123451011
solution(n)