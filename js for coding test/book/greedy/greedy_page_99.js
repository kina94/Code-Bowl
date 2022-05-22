function solution(n, k){
    let cnt = 0
    while(n>1){
        if(n%k===0){
            n=n/k
            cnt++
        } else {
            n=n-1
            cnt++
        }
    }

    console.log(cnt)
}

let n = 25
let k = 5
solution(n,k)