function solution(n, k) {
    var answer = -1;
    //소수 판별
    const isPrime = (num) =>{
        if(num <= 1) return false
        for(let i=2; i<num; i++){
            if(num%i === 0) return false
        }
        return true
    }

    let array = n.toString(k).split('0')
    answer = array.filter(item=>item!=='' && isPrime(Number(item))).length
    return answer;
}

let n = 110011
let k = 10
solution(n,k)