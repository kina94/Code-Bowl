function solution(citations) {
    var answer = 0;
    citations = citations.sort((a,b)=> b-a)
    var max = citations[0]
    var min = citations[citations.length-1]
    for(i=min; i<=max; i++){
        let high = citations.filter(key=>key>=i).length
        let row = citations.filter(key=>key<=i).length
        if(high>=i && row<=i){
            answer=i
        }
    }
    if(min>=citations.length){
        answer=citations.length
    }
    return answer;
}

let citations = [22, 42]
solution(citations)
