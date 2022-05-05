function solution(record) {
    var answer = [];
    let user_info = {};
    let split_record = [];

    record.map(item=>{
        let user_record = item.split(' ')
        split_record.push(user_record)
        if(user_record[0]!='Leave'){ // 최종적으로 바꾼 닉네임을 저장
            user_info[user_record[1]]=user_record[2]
        }
    }) 

    for(let i=0; i<split_record.length; i++){
        let user_id = split_record[i][1]
        split_record[i][2] = user_info[user_id]
    } // 저장된 최종 변경 닉네임 객체를 참조하여 record의 닉네임 변경

    split_record.map(record=>{
        if(record[0]==='Enter'){
            answer.push(record[2]+'님이 들어왔습니다.')
        } else if(record[0]==='Leave'){
            answer.push(record[2]+'님이 나갔습니다.')
        }
    })
    
    return answer;
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
solution(record)