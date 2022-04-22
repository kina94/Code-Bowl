function solution(s) {
    answer=s
    const table = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    Object.keys(table).map(key=>{
        var arr=answer.split(table[key])
        answer=arr.join(key)
    })
    return Number(answer)
}

s = "34onetwo4three"

solution(s)