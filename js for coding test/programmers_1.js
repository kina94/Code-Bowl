function solution(id_list, report, k) {
    report_result = {} // 피신고인과 신고인 매칭 객체
    answer={} // 정지 메일 발송 횟수

    id_list.map(name=>{
        report_result[name]=[]
        answer[name]=0
    }) // 신고인과 피신고인, 정지 메일 발송 횟수 초기화


    report.map(name=>{
        const [report, reported] = name.split(' ')
        if(!report_result[reported].includes(report)){
            report_result[reported].push(report)
        }
    }) // 피신고인 : [신고인 배열] 객체 생성

    Object.keys(report_result).map(name=>{
        if(report_result[name].length>=k){ // 신고인이 k명 이상인 경우
            report_result[name].map((user)=>{ // 해당 신고인의 이름을 가져와서
                answer[user]+=1 // 메일 발송 횟수를 늘려준다
            })
        }
    })
    
    answer=Object.values(answer)
    return answer
}

id_list= ["muzi", "frodo", "apeach", "neo", "con", "ryan"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi", "ryan con", "ryan con", "ryan con", "ryan con", "ryan frodo"]
k = 2
solution(id_list, report, k)