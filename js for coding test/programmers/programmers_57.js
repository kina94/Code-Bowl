function solution(s) {
    var answer = [];
    let arr = s.split(/[{}]/)
    let cnt = {}
    arr = arr.filter(key=>key!='' && key!=',')
    
    for(let i=0; i<arr.length; i++){
        let tmp_arr = arr[i].split(',')
        for(let j=0; j<tmp_arr.length; j++){
            if(cnt[tmp_arr[j]]===undefined){
                cnt[tmp_arr[j]]=1
            } else {
                cnt[tmp_arr[j]]+=1
            }
        }
    }

    cnt = Object.entries(cnt).sort(([,a],[,b])=>b-a)
    
    cnt.map(item=>{
        answer.push(Number(item[0]))
    })
    return answer;
}

let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"	
solution(s)