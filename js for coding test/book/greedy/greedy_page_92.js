function solution(n, m, k) {
    n = n.sort((a, b) => b - a)
    n=n.slice(0,2)
    let [sum, cnt] = [0,0]
    while(m>0){
        sum+=n[0]
        m--
        cnt++
        if(cnt>=k){
            cnt=0
            sum+=n[1]
            m--
        }
    }
    return sum
}

let n = [2, 4, 5, 4, 6]
let m = 8
let k = 3
solution(n, m, k)