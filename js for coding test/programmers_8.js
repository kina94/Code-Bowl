function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++){
        if(!signs[i]){
            absolutes[i]=-absolutes[i]
        }
        answer+=absolutes[i]
    }
    return answer;
}

let absolutes = [4,7,12]
let signs = [true,false,true]