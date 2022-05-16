function solution(rows, columns, queries) {
    var answer = [];
    let number = 1;

    //배열 생성
    let array = Array.from(new Array(rows+1), () =>
        new Array(columns+1).fill(0)
    )

    //숫자 채우기
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            array[i][j] = number;
            number=number+1
        }
    }

    queries.map(querie => {
        const [y1, x1, y2, x2] = querie; //시작 좌표 & 끝나는 좌표 선택
        const stack = [];

        //시작 좌표부터 y1은 고정시키고 x1이 x2가 될때까지 x 증가
        for (let x = x1; x < x2; x++) {
            stack.push(array[y1][x])
        }
        //x2는 고정시키고 y1이 y2가 될때까지 y증가
        for (let y = y1; y < y2; y++) {
            stack.push(array[y][x2])
        }
        //y2는 고정시키고 x2가 x1이 될때까지 x감소
        for (let x = x2; x > x1; x--) {
            stack.push(array[y2][x])
        }
        //x1은 고정시키고 y2가 y1이 될 때까지 y 감소
        for (let y = y2; y > y1; y--) {
            stack.push(array[y][x1])
        }

        // 회전
        const last_number = stack.pop()
        stack.unshift(last_number)
        
        answer.push(Math.min(...stack))

        //회전된 값으로 원본 array 바꿔주기
        for (let x = x1; x < x2; x++) {
            array[y1][x] = stack.shift()
        }
        for (let y = y1; y < y2; y++) {
            array[y][x2] = stack.shift()
        }
        for (let x = x2; x > x1; x--) {
            array[y2][x] = stack.shift()
        }
        for (let y = y2; y > y1; y--) {
            array[y][x1]= stack.shift()
        }
    })

    return answer;
}

let rows = 5
let columns = 3
let queries = [[1, 1, 100, 97]] // 시작 x,y 좌표

solution(rows, columns, queries)


//end_x - start_x 만큼이 이동할 x거리
//end_y - start_y 만큼이 이동할 y거리
// 1) 오른쪽으로 +x만큼 이동하고,
// 2) 아래로 +y만큼 이동하고,
// 3) 왼쪽으로 -x만큼 이동하고,
// 4) 위로 -y만큼 이동한다.