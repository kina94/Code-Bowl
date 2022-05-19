function solution(numbers, hand) {
    var answer = '';
    let left = [1,4,7]
    let center = [2,5,8,0]
    let right = [3,6,9]

    let Lpos = [3, 0]
    let Rpos = [3, 2]

    numbers.map(number=>{
        if(left.includes(number)){
            answer+='L'
            Lpos = [left.indexOf(number),0]
        } else if (right.includes(number)){
            answer+='R'
            Rpos = [right.indexOf(number),2]
        } else {

            const Cpos= [center.indexOf(number),1]

            const Ldist = Math.abs(Cpos[0]-Lpos[0]) + Math.abs(Cpos[1]-Lpos[1])
            const Rdist = Math.abs(Cpos[0]-Rpos[0]) + Math.abs(Cpos[1]-Rpos[1])

            if(Rdist>Ldist){
                answer+='L'
                Lpos = Cpos
            } else if (Rdist<Ldist){
                answer+='R'
                Rpos = Cpos
            } else {
                if(hand==='right'){
                    answer+='R'
                    Rpos = Cpos
                } else {
                    answer+='L'
                    Lpos = Cpos
                }
            }
        }
    })

    return answer;
}

let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
let hand = 'left'
solution(numbers, hand)