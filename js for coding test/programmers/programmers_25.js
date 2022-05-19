function solution(a, b) {
    var answer = 0;
    if(a>b){
        tmp=a
        a=b
        b=tmp
    }
    for(let i=a; i<=b; i++){
        answer+=i
    }
    return answer;
}

let a = 3
let b = 5
solution(a,b)