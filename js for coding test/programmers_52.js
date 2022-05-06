function solution(s)
{
    var answer = 1;
    let stack = []

    for(let i=0; i<s.length; i++){
        stack.push(s[i])
        if(stack[stack.length-2] === stack[stack.length-1]){
            stack.pop()
            stack.pop()
        }
    }

    if(stack.length===0){
        answer = 1
    } else {
        answer = 0
    }

    return answer;
}

let s = 'caaaabbc'
solution(s)