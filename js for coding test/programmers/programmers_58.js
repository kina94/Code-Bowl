function solution(n,a,b)
{
    var answer = 0;
    let cnt=0

    while(Math.ceil(a)!=Math.ceil(b)){
        a=Math.ceil(a/2)
        b=Math.ceil(b/2)
        cnt++
    }

    answer=cnt
    return answer;
}

let n = 8
let a = 4
let b = 7
solution(n, a, b)