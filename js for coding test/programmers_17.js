function solution(sizes) {
    var answer = 0;
    let max_sizes = [0,0]
    sizes.map((x,y)=>{
        if(x[0]<x[1]){
            tmp=x[0]
            x[0]=x[1]
            x[1]=tmp
        }
    })

    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0]>=max_sizes[0]){
            max_sizes[0]=sizes[i][0]
        }
        if(sizes[i][1]>=max_sizes[1]){
            max_sizes[1]=sizes[i][1]
        }
    }
    answer = max_sizes[0] * max_sizes[1]
    return answer;
}

let sizes=[[60, 50], [30, 70], [60, 30], [80, 40]]
solution(sizes)