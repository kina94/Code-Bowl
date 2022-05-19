function solution(places) {
    var answer = [];

    const getCoor = (x,y, cnt, array, visited) =>{
        // console.log(x,y, array[x][y])
        if(cnt>2) return 0 //거리가 2를 벗어나면 return
        if(x<0 || y<0 || x>4 || y>4) return 0 // 범위 밖으로 나가면 return
        if(visited[x][y]===1) return 0 // 이미 방문한 곳이면 return
        visited[x][y]=1
        console.log(x,y, array[x][y], cnt)
        //거리가 2 이하인데 사람이 있으면 거리두기 실패
        // console.log('cnt', cnt, cnt>0 && cnt<=2)
        // console.log('array', array[x][y]==='P')
        if(cnt>0 && cnt<=2){
            if(array[x][y]==='P'){
                console.log("안지킴")
                return 1
            }
        }
        console.log("지켜서 다음칸")
        return getCoor(x, y+1, cnt+1, array, visited) +
        getCoor(x, y-1, cnt+1, array, visited) +
        getCoor(x+1, y, cnt+1, array, visited) +
        getCoor(x-1, y, cnt+1, array, visited)
    }

    places.map(place=>{
        let array = []
        let visited = []
        let flag = 1

        for(let i=0; i<5; i++){
            let inner_visited = new Array(5)
            inner_visited.fill(0)
            visited.push(inner_visited)
        }

        for(let i=0; i<place.length; i++){
            let inner_array=[]
            for(let j=0; j<place.length; j++){
                inner_array.push(place[i][j])
                if(place[i][j]==='X'){ // 파티션 1로 표기
                    visited[i][j]=1
                }
            }
            array.push(inner_array)
        }

        // 시작
        for(let i=0; i<array.length; i++){
            for(let j=0; j<array.length; j++){
                if(array[i][j]==='P'){
                    const test = getCoor(i,j,0,array,visited)
                    console.log('사람 하나 끝남', i, j, test)
                    if(test){
                        flag = 0
                        break;
                    }        
                }
            }
        }

        answer.push(flag)
        console.log('---------------------------------')
    })

    console.log(answer)
    return answer;
}

let places= [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
solution(places)

// P: 응시자, O:빈테이블, X:파티션a

['P','O','O','P']