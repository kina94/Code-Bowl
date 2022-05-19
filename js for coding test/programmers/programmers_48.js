function solution(s) {
    var answer = 0;
    let min_length = s.length
    let cnt_arr = []

    const sliceStr = (str, length) => {
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    }

    for (let i = 1; i <= s.length; i++) {
        let answer = ''
        let cnt_arr = []
        let cnt = 1
        let str_arr = sliceStr(s, i)
        for (let j = 0; j < str_arr.length; j++) {
            if (str_arr[j] === str_arr[j + 1]) {
                cnt++

            } else {
                if (cnt === 1) {
                    cnt = ''
                }
                cnt_arr.push([str_arr[j], String(cnt)])
                cnt = 1
            }
        }

        cnt_arr.map(item => {
            let cnt_word = item[1] + item[0]
            answer += cnt_word
        })

        answer = answer.length
        if (min_length > answer) {
            min_length = answer
        }
    }

    answer = min_length
    if (answer < 0) {
        answer = -answer
    }

    return answer;
}

let str = "ababcdcdababcdcd"
solution(str)