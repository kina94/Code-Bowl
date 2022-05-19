function solution(s) {
    var answer = '';
    s = s.split(' ')

    s.map(item=>{
        for(let i=0; i<item.length; i++){
            if(i===0){
                answer+=item[i].toUpperCase()
            } else if(i%2===0){
                answer+=item[i].toUpperCase()
            } else{
                answer+=item[i].toLowerCase()
            }
        }
        answer+=' '
    })
    answer = answer.slice(0, answer.length-1)
    return answer;
}

let s = "try hello world"
solution(s)