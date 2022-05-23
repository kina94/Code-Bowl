function solution(n){
    n = n.sort()
    let cnt= 0
    let answer = 0
    n.map(item=>{
        cnt++
        if(cnt>=item){
            answer++
            cnt=0
        }
    })
    console.log(answer)
}

let n = [2,3,1,2,2]
solution(n)