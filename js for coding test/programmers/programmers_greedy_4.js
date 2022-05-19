function solution(people, limit) {
    var answer = [];
    let i = 0;
    let j = people.length-1
    let boat = 0
    people = people.sort((a,b)=>a-b)


    while(i<j){
        let min = people[i]
        let max = people[j]
        if(min+max>limit){ // limit을 넘기면
            j-- // j만 태우고 다음으로 넘김
        } else { // 태울 수 있으면
            i++  // i 태움
            j-- // j 태움
        }
        boat++
    }

    if(i===j) boat++ // 한명만 남게 되면 보트 하나 늘려줌

    answer=boat
    return answer;
}

let people = [70, 50, 80, 50]
let limit = 100
solution(people, limit)
