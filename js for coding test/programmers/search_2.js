function solution(answers) {
  let answer = [];
  const stuScore = [];
  const stu = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  stu.map((stu) => {
    cnt = 0;
    answers.map((_, index) => {
      if (answers[index] === stu[index % stu.length]) {
        cnt++;
      }
    });
    stuScore.push(cnt);
  });

  const maxScore = Math.max(...stuScore);
  stuScore.map((score, index) => {
    if (score === maxScore) {
      answer.push(index + 1);
    }
  });

  return answer;
}

solution([1, 2, 3, 4, 5]);
