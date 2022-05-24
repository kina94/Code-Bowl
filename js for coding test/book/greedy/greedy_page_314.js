function solution(n){
    n = n.split('').sort()
    let array = []
    if(Math.min(...n)!=1){
        answer = 1
    }

    let target=1
    n.map(item=>{
        if(target<Number(item)){
            return
        } else{
            target+=Number(item)
        }
    })

    return target
}

let n = '32119'
solution (n)