function solution(info, query) {
    var answer = -1;
    let obj = []
    let temp = []

    for(let i=0; i<relation.length; i++){
        for(let j=0; j<relation[i].length; j++){
            obj[j] ? obj[j] = [...obj[j], relation[i][j]] : obj[j] = [relation[i][j]]
        }
    }
    
    obj.map(item=>{
        if(item.length === [...new Set(item)].length){
            answer++
        } else {
            temp.push(item)
        }
    })

    const getCombination = (array) =>{
        const result = []
        array.map((fixed, index, thisArray)=>{
            const restComb = getCombination(thisArray.slice(index+1)) 
            const attched = restComb.map(restComb=>[fixed, ...restComb]);
            result.push(...attched);
        })
        return result
    }

    console.log(getCombination(temp))

    console.log(temp)

    return answer;
}

let relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]
solution(relation)