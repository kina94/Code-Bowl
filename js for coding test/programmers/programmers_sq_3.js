function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var sum = 0;
    var queue = new Array(bridge_length);
    
    queue.fill(0); // length만큼 0 채워주기 (다리에 올라가 있는 트력)
        
    while(queue.length > 0){
        answer++; //시간초 증가

        var truck = queue.shift() // 다리에 올라간 트럭이 앞으로 한 칸 이동
        sum = sum - truck  // 다리에 올라가 있는 트럭의 무게, 다리에 올라간 첫번째 트럭의 무게를 빼주면서 진행
        
        if(truck_weights.length > 0){
            if(sum + truck_weights[0] <= weight){ //현재 다리에 올라간 트럭의 무게 + 올라갈 트럭의 무게 < 다리 중량이면
                var truck = truck_weights.shift(); // 트럭에서 하나 빼서
                sum += truck; 
                // console.log(sum)
                queue.push(truck); //다리에 올려준다
            }
            else{
                queue.push(0); // 다리에 못올라가면 0으로 채워준다 (대기 상태)
            }
        }
    }
    return answer;
}

var bridge_length=2 // 다리에 올라갈 수 있는 트럭 대수
var weight = 10 // 다리가 견딜 수 있는 무게
var truck_weights=[7,4,5,6] // 트럭 무게
solution(bridge_length, weight, truck_weights)