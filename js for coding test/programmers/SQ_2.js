function solution(progresses, speeds) {
  let answer = [];
  let cnt = 1;
  const days = [];

  speeds.map((_, index) => {
    const time = Math.ceil((100 - progresses[index]) / speeds[index]);
    days.push(time);
  });

  let maxDay = days[0];

  days.map((_, index) => {
    if (days[index + 1] <= maxDay) {
      cnt++;
    } else {
      maxDay = days[index + 1];
      answer.push(cnt);
      cnt = 1;
    }
  });

  return answer;
}

solution(
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
);
