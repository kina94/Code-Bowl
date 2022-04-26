function solution(numbers) {
    var answer = ''
    numbers=numbers.map((item)=> item +'').sort((a,b)=> (b+a)-(a+b))
    numbers=numbers.join('')
    if(numbers[0]==='0'){
        numbers='0'
    }
    answer=numbers
    return answer
}

let numbers = [0, 0, 0, 0, 0]	
solution(numbers)

// i=1 [3, 34, 30, 5] mix = 334305, max=330345, max=334305
// i=2 [3, 34, 5, 30] mix = 334530, max=334305, max=334530
// [3, 30, 5 ,34]
// i=1 [34, 5, 30, 3]
// i=2 [34, 5, 3, 30]
