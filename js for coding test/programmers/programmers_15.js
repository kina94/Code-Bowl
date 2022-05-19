function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let sum=0
            sum=numbers[i]+numbers[j]
            if(!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    
    answer.sort((a,b) => a-b)
    return answer;
}

let numbers = [2,1,3,4,1]
solution(numbers)