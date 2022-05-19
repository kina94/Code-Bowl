function solution(n, k) {
    var answer = -1;
    let convertNum = ''
    if(k===10){
        convertNum = parseInt(n, 10)
    } else {
        convertNum = n.toString(k)
    }

    //소수 판별
    const isPrime = (num) =>{
        if(num === 1) return false
        for(let i=2; i<num.length; i++){
            if(num%i === 0) return false
        }
        return true
    }

    let array = convertNum.toString().split('0')
    answer = array.filter(item=>item!='' && isPrime(parseInt(item,10))).length
    return answer;
}

let n = 110011
let k = 10
solution(n,k)