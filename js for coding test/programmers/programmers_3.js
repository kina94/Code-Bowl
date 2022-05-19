function solution(new_id) {
    answer = new_id.toLowerCase() // 1. 소문자 치환
    answer= answer.replace(/[^a-z0-9-_.]/g,"") // 2. 불필요 문자 제거
    answer = answer.replace(/\.+/g,'.') // 3. .이 한 개 이상인 경우 .로 대체
    if(answer[0]==='.'){answer=answer.slice(1)} // 4. .이 처음이나 끝에 위치한 경우
    if(answer[answer.length-1]==='.'){answer=answer.slice(0,answer.length-1)}
    if(answer.length===0) {answer='a'} // 5. 빈 문자열이면 a 반복
    if(answer.length>15){ // 6. 16자 이상인 경우 15자로 자르고 마지막이 .면 제거
        answer=answer.slice(0,15)
        if(answer[answer.length-1]==='.'){
            answer=answer.slice(0, answer.length-1)
        }
    }
    if(answer.length<=2){ // 7. 길이가 2자 이하인 경우 길이가 3이 될때까지 마지막 문자 붙이기
        var str = answer[answer.length-1]
        while(answer.length<3){
            answer=answer+str
        }
    }
    return answer

}

new_id = "abcdefghijklmn.p"	
solution(new_id)