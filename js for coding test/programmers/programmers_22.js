function solution(dartResult) {
    var answer = 0;
    let arr = []
    let result = []
    const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
    //숫자가 최소 1개 이상 최대 2개 이하
    //[SDT]가 최소 한개 1상
    //*또는 |이 최대 한번 있거나 없거나
    arr = dartResult.match(regex)

    arr.map(dart =>{
        let game = dart.split(/([SDT]{1})/)
        //SDT 기준 분리
        let score = Number(game[0])
        let bonus = 0;
        let option = 1;
        if(game[1] === 'S') bonus = 1; // 제곱해줄 수
        if(game[1] === 'D') bonus = 2;
        if(game[1] === 'T') bonus = 3;

        if(game[2] === '*'){
            if(result.length!=0) result[result.length-1]*=2 // 전에 추가된 다트에 2배
            option = 2; // option 2배 설정
        }
        if(game[2] === '#') option=-1 // option -1배 설정

        result.push(score ** bonus * option)
    })

    return result.reduce((a,b)=>a+b)
}

let dartResult = '1S2D*3T'
solution(dartResult)

// * 해당 점수*2 , 바로 전의 점수*2 (처음 나오면 첫번째 스타상만 2배) , (중첩되면 4배)
// # 해당 점수 = -해당점수 (스타랑 중첩되면 마이너스 2배)
// 