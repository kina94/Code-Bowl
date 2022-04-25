function solution(progresses, speeds) {
    var answer = [];
    var days = []; // 작업 소요 시간
    var work = 0

    for (var i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }

    var max = days[0]

    for (var i = 0; i < days.length; i++){
        if (max < days[i+1]) {
            max=days[i+1]
            work = work + 1
            answer.push(work)
            work=0
        } else {
            work = work + 1
            console.log(work)
        }
        if(i===days.length-1){
            answer.push(work)
        }
    }

    console.log(answer)
return answer;
}

var progresses = [95, 90, 99, 99, 80, 99]	
var speeds = [1, 1, 1, 1, 1, 1]	

solution(progresses, speeds)

// 새로운 최댓값을 찾을때까지 + 해준다.
