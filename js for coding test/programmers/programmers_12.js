function solution(N, stages) {
    var answer = [];
    for (let i=1; i<=N; i++){
        let user = stages.filter(key=>key>=i)
        let fail = user.filter(key=>i-key===0).length/user.length
        answer.push([i,fail])
    }
    answer=answer.sort((a,b)=>b[1]-a[1])
    for (let i=0; i<answer.length; i++){
        answer[i] = answer[i][0]
    }
    return answer;
}

let N = 5
let stages = [2,1,2,6,2,4,3,3]
solution(5, stages)