function solution(numbers) {
    var answer = 0;
    for(i=0; i<10; i++){
        if(!numbers.includes(i)){
            answer+=i
        }
    }
    return answer;
}

let numbers = [1,2,3,4,6,7,8,0]	
solution(numbers)