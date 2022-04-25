function solution(clothes) {
    var clothes_ob = {}
    var answer = 1

    clothes.map(name=>{
        var category=name[name.length-1]
        clothes_ob[category]=[]
    })

    clothes.map(name=>{
        var category=name[name.length-1]
        clothes_ob[category].push(name[0])
    })

    Object.keys(clothes_ob).map(category=>{
        answer=answer*(clothes_ob[category].length+1)
    })

    return answer-1
}

var clothes= [["yellowhat", "headgear"],
["bluesunglasses", "eyewear"],
["green_turban", "headgear"]]
                  
solution(clothes)