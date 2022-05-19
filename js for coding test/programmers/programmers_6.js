function solution(board, moves) {
    var answer = 0;
    var stack = []

    moves.map(move=>{
        for(let i=0; i<board.length; i++){
            if(board[i][move-1]!=0){
                stack.push(board[i][move-1])
                board[i][move-1]=0
                break
            }
        }
        if(stack[stack.length-1]===stack[stack.length-2] && stack.length>0){
            stack.pop()
            stack.pop()
            answer+=2
        }
    })
    return answer;
}

let board = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]] // 격자 모양
let moves = [1,5,3,5,1,2,1,4] // 크레인이 이동한 위치
solution(board, moves)