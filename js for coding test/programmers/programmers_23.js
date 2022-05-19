function solution(arr)
{
    var answer = []

    for(let i=0; i<arr.length; i++){
        if(answer[answer.length-1]===arr[i]){
            continue
        } else {
            answer.push(arr[i])
        }
    }
    return answer;
}

let arr = [1,1,3,3,0,1,1]
solution(arr)