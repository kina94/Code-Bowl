function solution(expression) {
    var answer = 0;
    let answer_arr=[]
    let max = 0
    let operators = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ]

    for(let i=0; i<operators.length; i++){
        let tmp_arr = expression.split(/(\D)/)
            for(let j=0; j<operators[i].length; j++){
                while(tmp_arr.includes(operators[i][j])){
                    const idx = tmp_arr.indexOf(operators[i][j])
                    tmp_arr.splice(idx-1, 3, eval(tmp_arr.slice(idx-1, idx+2).join('')))
                }
            }
            answer_arr.push(Math.abs(tmp_arr[0]))
    }

    answer = Math.max(...answer_arr)

    return answer;
}

let expression = "50*6-3*2"	
solution(expression)