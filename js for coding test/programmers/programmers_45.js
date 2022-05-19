function solution(phone_number) {
    var answer = '';
    for(let i=0 ; i<phone_number.length-4; i++){
        answer+='*'
    }
    answer = answer + phone_number.slice(phone_number.length-4, phone_number.length)
    return answer;
}

let phone_number = "01033334444"
solution(phone_number)