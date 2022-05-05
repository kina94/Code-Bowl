function solution(s) {
    let min_length = s.length

    const sliceStr = (str, length) => { //문자열을 일정한 길이로 자름
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    }

    for(let i=1; i<=s.length; i++){
        let answer ='' // 최종 압축된 문자열을 받을 배열
        let cnt_arr=[] // 문자열별 압축된 결과를 받을 이차원 배열
        let chk = {} // cnt_arr에 넣기 전 객체화하여 해당 문자열 연속 등장 횟수 카운트
        let cnt=1
        let str_arr = sliceStr(s, i)

        
        for(let j=0; j<str_arr.length; j++){
            if(str_arr[j]===str_arr[j+1]){
                cnt++
                chk[str_arr[j]]=cnt
            } else {
                if(cnt===1){
                    cnt=''
                }
                cnt_arr.push([str_arr[j], String(cnt)])
                delete(chk[str_arr[j-1]])
                cnt = 1
            }
        }
        
        cnt_arr.map(item=>{
            let cnt_word = item[1]+item[0]
            answer+=cnt_word
        })

        answer = answer.length
       if(min_length>answer){
           min_length = answer
       }
    }

    answer=min_length
    if(answer<0){
        answer=-answer
    }

    return answer;
}

let s = 'aaaaaabaaaaaa'
solution(s)