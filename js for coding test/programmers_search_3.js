function solution(brown, yellow) {
    var answer = []
    let total_sum = brown+yellow
    let divisor = []
    let cnt =0;

    for(let i=0; i<=total_sum; i++){
        if(total_sum%i===0){
            divisor.push(i)
            if(i*i === total_sum){
                divisor.push(i)
            }
        }
    }

    const isTotalSum = (num) =>{
        if(num[0] * num[1] === total_sum && (num[0]*2 + num[1]*2) - 4 === brown
        &&num[0] >= num[1]){
            return true
        } else{
            return false
        }
    }

    

    const permutation = (arr) => {
        while (arr.length-1>cnt){
            for(let i=0; i<arr.length-1; i++){
                let mult_comb=[]
                let fixed = arr[0]
                mult_comb.push(fixed)
                mult_comb.push(arr[i+1])
                if(isTotalSum(mult_comb)){
                    answer=mult_comb
                }
            }
            let temp_arr = [...arr]
            temp_arr.shift()
            temp_arr.push(arr[0])
            cnt++
            permutation(temp_arr)
        }
        return answer
    }
    answer = permutation(divisor)
    return answer;
}

let brown = 8
let yellow = 1
solution(brown, yellow)