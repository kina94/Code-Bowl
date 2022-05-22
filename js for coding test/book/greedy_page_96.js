function solution(n){
    let array = []
    for(let i=0; i<n.length; i++){
        let card = Math.min(...n[i])
        array.push(card)
    }
    let answer = Math.max(...array)
    return answer
}

let n = [[7,3,1,8],[3,3,3,4]]

solution(n)
