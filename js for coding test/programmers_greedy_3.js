function solution(number, k) {
    let stack = [];
    let answer = '';

    for(let i=0; i<number.length; i++){
        let el = number[i]

        while (k>0 && stack[stack.length-1] < el){
            stack.pop()
            k-- // 제외한 숫자 감소
        }
        stack.push(el)
    }

    stack.splice(stack.length-k, k)
    answer = stack.join('')
    return answer;
}

let number = '1231234'
solution(number, 3)