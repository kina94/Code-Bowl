// 1) i-1부터 j-1까지 자르기
// 2) 1에서 나온 배열 정렬하기
// 3) 2에서 나온 배열의 k-1번째 숫자 구하기 

function solution(array, commands) {
    var answer = [];
    commands.map(item=>{
        var i = item[0]
        var j = item[1]
        var k = item[2]
        var sorted = array.slice(i-1,j)
        sorted.sort((a,b)=>a-b)
        answer.push(sorted[k-1])
    })
    return answer;
}

var array = [1, 5, 2, 6, 3, 7, 4]
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)