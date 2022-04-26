function solution(numbers) {
    var answer = 0;
    let arr = []
    let comb = []
    let mix_cnt = 1
    let cnt = 0
    for(i=0; i<numbers.length; i++){
        arr.push(Number(numbers[i]))
    }

    for(i=1; i<arr.length; i++){
        mix_cnt=mix_cnt*i
    }

    while(cnt<=arr.length){
        let first = arr[0]
        for(i=1; i<arr.length; i++){
            comb.push(Number(String(first)+String(arr[i])))
        }
        arr.shift(first)
        arr.push(first)
        cnt++
    }
    comb = comb.concat(arr)
    comb = new Set(comb)
    comb = [...comb]

    console.log(comb)

    comb.map(item=>{
        for(i=2; i<item; i++){
            if(item % i === 0 || item === 1){
                comb.pop(item)
                console.log(comb)
            }
        }
    })

    return answer;
}

let numbers = '011'
solution(numbers)

//소수 : 자기 자신과 1로 나누ㅏ어 떨어지는 수

// [4, 1, 3, 2] [41, 43, 42, 413, 412, ]
// [1, 3, 2, 4] [13 12 14]
// [3 2 4 1 ] [32 34 31]
// [ 2 4 1 3 ] [ 24 21 23]

// [ 2 3 1 ] [ 23 21]
// [ 3 1 2 ] [31 32]
// [ 1 2 3 ] [12 13]
// [ 2 3 1 ] [23 21]

// [1 7] [17]
// [7 1] [71]