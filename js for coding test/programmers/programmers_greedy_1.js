function solution(n, lost, reserve) {
    var answer = 0;
    for (let num = 1; num <= n; num++) {
        if (lost.includes(num) && reserve.includes(num)) {
            lost = lost.filter(key => key != num)
            reserve = reserve.filter(key => key != num)
        }
    }

    for (let num = 1; num <= n; num++) {
        if (lost.includes(num)) {
            if (num + 1 > n) {
                if (reserve.includes(num - 1)) {
                    lost = lost.filter(key => key != num)
                    reserve = reserve.filter(key => key != num - 1)
                }
            }
            if (reserve.includes(num - 1)) {
                lost = lost.filter(key => key != num)
                reserve = reserve.filter(key => key != num - 1)
            } else if (reserve.includes(num + 1)) {
                lost = lost.filter(key => key != num)
                reserve = reserve.filter(key => key != num + 1)
            }
        }
    }


    answer = n - lost.length
    return answer;
}

let n = 4
let lost = [3, 1, 2]
let reserve = [2, 4, 3]
solution(n, lost, reserve)