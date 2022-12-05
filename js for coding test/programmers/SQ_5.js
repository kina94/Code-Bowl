function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let sum = 0;
  let bridge = new Array(bridge_length).fill(0);

  while (bridge.length > 0) {
    time++;
    sum -= bridge.shift();
    if (truck_weights.length > 0) {
      if (sum + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        sum += truck;
        bridge.push(truck);
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}

solution(2, 10, [7, 4, 5, 6]);
