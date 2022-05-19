function solution(n) {
    let answer=0
    let arr = new Array(n).fill(1)
    arr[0] = 0;
    for(let i=2; i*i<=n; i++){
        for(let j=i*i; j<=n; j+=i){
            arr[j-1]=0;
        }
    }

    answer = arr.filter(item=>item==1).length
    return answer;
}

let n = 10
solution(10)