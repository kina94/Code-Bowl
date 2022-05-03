function solution(arr1, arr2) {
    var answer = [];
    for(let i=0; i<arr1.length; i++){
        let arr=[]
        for(let j=0; j<arr1[i].length; j++){
            if(arr1[i].length===1){
                let arr=[]
                arr.push(arr1[i][j]+arr2[i][j])
            }
            arr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(arr)
    }
    return answer;
}

let arr1 = [[1],[2]]	
let arr2 = [[3],[4]]	
solution(arr1, arr2)