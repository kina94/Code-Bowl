function solution(lottos, win_nums) {
    const rank = {
        1: 6,
        2: 5,
        3: 4,
        4: 3,
        5: 2,
        6: 0,
    }
    var cnt = 0
    var zero_cnt = lottos.filter(element => 0 === element).length // 0으로 가려진 로또 번호 개수
    var cnt_result = 0
    answer = []
    lottos.map(num => {
        if (win_nums.includes(num)) {
            cnt += 1
        }
    }) // 당첨 번호에 내 번호가 들어갔을 경우 맞은 횟수 +1

    cnt_result = cnt + zero_cnt // 0으로 가려진 번호가 모두 당첨인 경우 
    answer.push(Number(Object.keys(rank).find(key => rank[key] === cnt_result)))

    if (cnt < 2) {
        cnt = 0
    } // 당첨 번호가 2개 이하인 경우 낙첨이므로 0 처리

    answer.push(Number(Object.keys(rank).find(key => rank[key] === cnt))) 

    return answer
}

lottos = [0, 0, 0, 0, 0, 0]
win_nums = [31, 10, 45, 1, 6, 19]
solution(lottos, win_nums)