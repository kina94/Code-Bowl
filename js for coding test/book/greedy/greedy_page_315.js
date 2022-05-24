function solution(k) {
    let result = 0
    let n = k.length
    let array = new Array(n).fill(0)

    k.map(weight=>{
        array[weight]+=1 // weight 무게의 볼링공 카운트. 
    })

    for(let i=1; i<n+1; i++){
        n-=array[i] // B가 선택할 수 있는 수
        result += array[i] * n
    } 

    console.log(result)
}

let k = [1, 5, 4, 3, 2, 4, 5, 2] // 각 볼링공의 무게
solution(k)