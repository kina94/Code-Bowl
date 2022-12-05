function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let complete = [];
  let during = [];
  while (truck_weights.length > 0) {
    console.log(
      "경과시간",
      time,
      "다리를 지난 트럭",
      complete,
      "다리를 건너는 트럭",
      during,
      "대기 트럭",
      truck_weights
    );
    const truck = truck_weights[0];
    truck_weights.shift();
    during.push(truck);
    time++;
    if (during.reduce((a, b) => a + b) >= 10) {
      complete.push(truck);
      during.shift();
      time++;
    } else {
      continue;
    }
  }
}

solution(2, 10, [7, 4, 5, 6]);
