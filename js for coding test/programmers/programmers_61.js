function solution(orders, course) {
    var answer = []

    const getCombination = (array, selectNum) =>{
        const result = []
        if(selectNum===1) return array.map(item=>[item])
        array.map((fixed, index, thisArray)=>{
            const restComb = getCombination(thisArray.slice(index+1), selectNum-1) 
            const attched = restComb.map(restComb=>[fixed, ...restComb]);
            result.push(...attched);
        })
        return result
    }

    course.map(selectNum=>{
        let combs = []
        orders.map(order=>{
            getCombination(Array.from(order), selectNum)
            .map(comb=> comb.sort().join(''))
            .forEach(combString => combs.push(combString))
        })
        const combCnt = combs.reduce((cnt, comb)=>{
            cnt[comb] = (cnt[comb]||0)+1;
            return cnt; 
        }, {})
        let maxCount = 0, maxComb = []
        for (const comb in combCnt) if (combCnt[comb] >= maxCount) maxCount = combCnt[comb]
        for (const comb in combCnt) if (combCnt[comb] === maxCount && maxCount >= 2) maxComb.push(comb)
        answer.push(...maxComb)
    })

    answer=answer.sort()
    return answer
}
let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4]

solution(orders, course)