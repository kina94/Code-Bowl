function solution(p) {
    var answer = '';
    var open = 0;
    var close = 0;

    const check = (p) => { //올바른 문자열인지 판단
        let stack = []
        for (let i = 0; i < p.length; i++) {
            if (p[i] === '(') stack.push('(')
            else {
                if (stack.length === 0) return false
                stack.pop()
            }
        }
        return true
    }

    const makeBasket = (p) => {
        if (!p) return ''; // 1. (빈 문자열 반환)
        for (let i = 0; i < p.length; i++) {
            if (p[i] === '(') open++
            else close++ // 균형을 이루는 곳까지 i 늘리기

            if (open === close) {// 2. 균형일 때 올바른 괄호 문자열인지 판단
                if (check(p.slice(0, i + 1))) { // 3. slice한 u가 올바른 문자열인지 판단
                    answer = p.slice(0, i + 1) + makeBasket(p.slice(i + 1)) //3-1. 올바른 문자열이면 v에 대해 1단계부터 다시 수행하고 u에 이어붙임
                    return answer
                } else{// u가 올바른 문자열이 아니라면
                    answer = '(' + makeBasket(p.slice(i+1)) + ')' //4-1, 4-2, 4-3 수행
                    for (let j=1; j<i; j++){ //4-4. u의 앞뒤 제거
                        if (p[j]==='(') answer+=')'
                        else answer+='('
                    }
                    return answer
                } 
            }
        }
    }


    answer = makeBasket(p)
    return answer
}


let p = "()))((()"
solution(p)
