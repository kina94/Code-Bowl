function solution(s) {
    var answer = '';
    let arr =[]
    s = s.split('')
    s.map(item=>{
        arr.push(item.charCodeAt())
    })

    arr=arr.sort((a,b)=>b-a)

    arr.map(item=>{
        answer+=String.fromCharCode(item)
    })

    return answer;
}

let s = "Zbcdefg"
solution(s)