function solution(brown, yellow) {
    var answer =[];

    for(var y=3; y<=yellow+2; y++){ //세로의 길이는 3부터 시작해서 yellow 면적보다 아래 위로 1씩 더 길어야 함
        let x = (brown-2*y+4)/2 // brwon(모서리 개수) = 2x+2y-4
        if(x>=y && x*y===brown+yellow){ // 가로 길이 >= 세로 길이, 가로길이*세로길이 = 총 면적인 경우
            answer=[x,y]
        }
    }
    return answer;
}

let brown = 24
let yellow = 24
solution(brown, yellow)