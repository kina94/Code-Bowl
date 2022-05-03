function solution(s){
    var answer = true;
    s=s.toLowerCase()
    s=s.split('')
    let cnt_p = s.filter(key=>key==='p').length
    let cnt_y = s.filter(key=>key==='y').length

    if(cnt_p === cnt_y){
        answer = true
    } else if (cnt_p===0 && cnt_y===0){
        answer = ture
    } else {
        answer = false
    }
    return answer;
}

let s = "pPoooyY"
solution(s)