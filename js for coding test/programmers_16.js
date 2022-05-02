function solution(a, b) {
    var answer = '';
    let days= [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    let start = [1, 1, 'FRI']
    let k=0

    for(let i=1; i<=a; i++){
        for(let j=1; j<=days[i-1]; j++){
            start=[i, j, weeks[k++]]
            if(k>weeks.length-1){
                k=0
            }
            if(start[0]===a && start[1] === b){
                answer = start[2]
            }
        }
    }

    return answer;
}

let a = 5
let b = 24
solution(a,b)