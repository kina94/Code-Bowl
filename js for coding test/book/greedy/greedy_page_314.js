function solution(n){
    let cnt1 = 0 // 1로 바꾸기
    let cnt0 = 0 // 0으로 바꾸기
    if(n[0]==='1'){
        cnt0++
    } else{
        cnt1++
    }

    for(let i=1; i<n.length; i++){
        if(n[i]!=n[i+1]){
            if(n[i]===0){
                cnt1++
            } else{
                cnt0++
            }
        }
    }

    let answer = Math.min(cnt1,cnt0)
    return answer
}

let n = '0001100'
solution (n)