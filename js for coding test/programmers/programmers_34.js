function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        if(s[i]===' '){
            target=' '
            answer+=target
        } else{
            let target = s[i].charCodeAt(0)
            if(target<=90 && target+n>90){
                target = 65+(n-(90-target)-1)
            } else if (target<=122 && target+n>122){
                target = 97+(n-(122-target)-1)
            } else {
                target = target+n
            }
            target=String.fromCharCode(target)
            answer+=target
        }
    }
    return answer;
}

let s = 'X'
let n = 4
solution(s, n)