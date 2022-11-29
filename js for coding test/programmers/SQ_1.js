function solution(arr) {
  let answer = [];

  arr.map((_, index) => {
    arr[index] !== arr[index + 1] && answer.push(arr[index]);
  });

  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
