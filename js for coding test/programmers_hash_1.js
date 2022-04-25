function solution(participant, completion) {
    var list =[]
    cnt = {}
    var answer=''

    list = participant.concat(completion)
    
    list.map(name=>{
        cnt[name] = (cnt[name] | 0 )+1
    })

    Object.keys(cnt).map(name=>{
        if(cnt[name]%2 != 0 ){
            answer = name
        }
    })

    return answer
}

var participant = ["leo", "kiki", "eden"]	
var completion = ["eden", "kiki"]
                  
solution(participant, completion)