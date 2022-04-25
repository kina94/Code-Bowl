function solution(priorities, location) {
    var answer = 0
    var cnt =0
    var doc = location

    while(priorities.length>0){
        var front = priorities.shift()
        if(priorities.filter(item=>item>front).length>0){ //0번째 항목보다 중요도가 높은 문서가 있는 경우
            priorities.push(front) 
        } else{ //중요도가 높은 문서가 없는 경우
            cnt++ //인쇄 카운트 증가
            if(doc===0){ //내 문서인 경우 cnt 출력하고 종료
                answer=cnt
                return answer
            }
        }
        doc-- //문서를 하나 꺼낼 때마다 내 문서의 위치 줄이기
        if (doc === -1) { // 내 문서가 맨 뒤로 가면
            // 내문서 위치인덱스도 맨뒤로 바꿔준다.
            doc = priorities.length - 1
        }
    }

    return answer
}

var priorities = [1, 1, 9, 1, 1, 1]
var location = 0


solution(priorities, location)