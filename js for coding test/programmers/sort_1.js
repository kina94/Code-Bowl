function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    const slice = array
      .slice(command[0] - 1, command[1])
      .sort((a, b) => (a > b ? 1 : -1));
    answer.push(slice[command[2] - 1]);
  });
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
