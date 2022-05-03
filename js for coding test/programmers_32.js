function solution(n) {
    var answer = '';
    let str = '수박'
    let i = 0

    while(answer.length<n){
        answer+=str[i]
        i++
        if(i>1){
            i=0
        }
    }
    return answer;
}

let n = 3;
solution(3)