function soluton(s) {
    s = s.split('').sort()
    console.log
    let answer = 0

    s.map(item => {
        let num = Number(item)
        if (num > 1) {
            if (answer === 0) {
                answer = answer + num
            } else {
                answer = answer * num
            }
        } else {
            answer = answer + num
        }
    })

    return answer
}

let s = '567'
soluton(s)