function solution(s) {
    var answer = true;
    if(s.match(/[^0-9]/) || (s.length!=4 && s.length!=6)){
        answer = false
    } else {
        answer = true
    }
    return answer;
}

let s = '1234'
solution(s)