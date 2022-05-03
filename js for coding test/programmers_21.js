function solution(s) {
    var answer = '';
    if(s.length%2===0){
        answer=s[s.length/2-1]+s[s.length/2]
    } else {
        answer=s[Math.ceil(s.length/2)-1]
    }
    return answer;
}

let s = 'abcde'
solution(s)