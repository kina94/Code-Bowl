function solution(name) {
    let sum = 0

    // 상하 이동 수
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }


    let minMove = name.length - 1 //최대로 많이 움직인 수는 길이 만큼임
    //좌우 이동 수
    for(let i = 1; i<name.length; i++){

        if(name[i]==='A'){ //A가 처음 발견된 곳
            for(var j = i+1 ; j <name.length; j++){ // 다음 인덱스부터 연속된 A가 있는지 체크
                if (name[j] !== 'A'){ // A가 없으면 멈추기
                    break;
                }
            }

            const left = i-1; // A를 발견하기 전의 위치
            const right = name.length - j; // 끝에서부터 A가 끝나는데까지의 길이

            console.log(left, right)

            minMove=Math.min(minMove, left>right ? left + right * 2 : left * 2 + right)

            console.log(minMove)

            i=j
        }
    }

    return sum+minMove
}

let name = 'BBBAABABB'
solution(name)



// J[0]일때 first_index=0, last_index=2 / step: 0/1 