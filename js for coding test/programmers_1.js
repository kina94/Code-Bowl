function solution(id_list, report, k) {
    report_result = {} // 피신고인과 신고인 매칭 객체
    report_array = {} //3번 이상 동일인에게 신고당한 경우를 제외한 객체
    report_cnt = {} //신고당한 횟수
    answer={} // 정지 메일 발송 횟수

    id_list.map(name=>{
        report_result[name]=[]
        answer[name]=0
    }) // 신고인과 피신고인, 정지 메일 발송 횟수 초기화

    report.map(key=>{
        report_array[key] = (report_array[key] || 0)+1
    }) // 3번 이상 동일인에게 신고당한 경우를 제외하기 위해 report 배열의 중복 횟수 확인

    report_array = Object.keys(report_array).filter(key=>report_array[key]<3) // 중복된 횟수 (3번 이상 동일인에게 신고당한 경우)를 제외한 배열 반환

    report_array.map(name=>{
        const [report, reported] = name.split(' ')
        report_cnt[reported] = (report_cnt[reported] || 0 )+1
        report_result[report].push(reported)
    }) // 피신고인이 신고당한 횟수 및 신고인과 피신고인 매칭 객체 생성

    report_cnt = Object.keys(report_cnt).filter(key=>report_cnt[key]>=k) // k번 이상 신고당한 피신고인만 포함하는 배열 추출

    Object.keys(report_result).map(reporter=>{
        report_cnt.map(reported=>{
            if(report_result[reporter].includes(reported)){
                answer[reporter] = ( answer[reporter] || 0 ) +1
            }
        })
    }) // k번 이상 신고당한 피신고인 값을 가지고 있는 신고인 key값을 cnt++
    // 초기에 answer 배열을 0으로 초기화하고, 중복 신고의 경우 제외했기 때문에 1번의 경우를 제외한 나머지는 0으로 카운트됨

    answer=Object.values(answer)
    return answer
}

id_list= ["muzi", "frodo", "apeach", "neo", "con", "ryan"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi", "ryan con", "ryan con", "ryan con", "ryan con", "ryan frodo"]
k = 2
solution(id_list, report, k)