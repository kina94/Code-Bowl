function solution(strings, n) {
    var answer = [];
    let alphabet = []
    strings.map(string=>{
        alphabet.push([string[n], string])
    })
    alphabet=alphabet.sort()
    alphabet.map(item=>{
        answer.push(item[1])
    })
    return answer;
}

let strings = ["sun", "bed", "car"]	
let n = 1
solution(strings, n)