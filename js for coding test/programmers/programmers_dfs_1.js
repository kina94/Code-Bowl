function solution(numbers, target) {
    var answer = 0;
    const recur = (count, sum) => {
        if (count === numbers.length){
            if(sum===target){
                answer++
                console.log('answer 추가')
            }
            return
        }
        recur(count+1, sum+numbers[count]);
        recur(count+1, sum-numbers[count])
    }

    recur(0,0)
    return answer;
}

let numbers = [1, 1, 1, 1, 1]
let target = 3
solution(numbers, target)