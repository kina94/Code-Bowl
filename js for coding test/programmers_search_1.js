function solution(answers) {
    var answer = [];
    let sorted = [];
    let cnt = 0;
    let person = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    Object.keys(person).map(people => {
        cnt = 0
        j = 0
        for (i = 0; i < answers.length; i++) {
            if(answers[i] === person[people][i%person[people].length]){
                cnt++
            }
        }
        sorted.push(cnt)
    })

    let max = Math.max(...sorted)

    sorted.map((item,index)=>{
        if(item===max){
            answer.push(index+1)
        }
    })
    return answer;
}

let answers = [1,2,3,4,5]
solution(answers)