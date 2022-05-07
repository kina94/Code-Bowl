function solution(maps) {
    let answer = -1;
    let queue = [[0,0,0]] // y, x, cnt
    let ny = [0,0,1,-1] // 동서남북
    let nx = [1,-1,0,0]

    const n = maps.length-1 // 세로
    const m = maps[0].length-1 // 가로
    const visited = []

    for(let i=0; i<maps.length; i++){
        let inner_array = []
        for(let j=0; j<maps[0].length; j++){
            inner_array.push(false)
        }
        visited.push(inner_array)
    }

    visited[0][0] = true // 초기 좌표 방문처리
    while(queue.length>0){ // queue의 length가 0보다 클때까지
        // 현재 좌표와 값들을 저장한다
        let y = queue[0][0] 
        let x = queue[0][1]
        let cnt = queue[0][2] + 1

        if(y===n && x===m){
            // console.log('y', y, 'x', x, 'n', n, 'm', m)
            answer = cnt
            break
        }

        queue.shift()
        
        for(let i=0; i<4; i++){ // 동서남북으로 이동하면서 방문 탐색 시작
            let coor_y = y + ny[i]
            let coor_x = x + nx[i]

            if(coor_y<0 || coor_x<0 || coor_y>n || coor_x>m){ // 범위를 벗어난 경우
                continue
            }
            if(maps[coor_y][coor_x]===0){ // 벽인 경우
                // console.log(coor_y, coor_x, maps[coor_y][coor_x], '벽입니다.')
                continue
            }
            if(visited[coor_y][coor_x]){ // 이미 방문한경우
                continue
            }

            // if(coor_x===4 && coor_y===4){
            //     console.log(x, y, n, m)
            // }
            queue.push([coor_y, coor_x, cnt]) // queue에 넣어준다
            visited[coor_y][coor_x]=true // 넣어준 후 해당 좌표 방문처리
        }
    }


    return answer;
}

let maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	
solution(maps)
