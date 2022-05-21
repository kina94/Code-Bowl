function solution(n) {
    let coins = [500, 100, 50, 10]
    let answer = 0
    let remain = n

    coins.map(coin => {
        answer += Math.floor(remain / coin)
        remain = remain % coin
    })
}

let n = 1260;
solution(n)