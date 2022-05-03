function solution(x) {
    var answer = true;
    x = String(x)
    let arr = x.split('')
    for(let i=0; i<arr.length; i++){
        arr[i] = Number(arr[i])
    }
    let sum = arr.reduce((a,b)=>a+b)
    if(x%sum===0){
        answer = true
    } else {
        answer = false
    }
    return answer;
}

let arr = 12
solution(arr)