function solution(citations) {
  let answer = 0;
  const max = Math.max(...citations);
  const min = Math.min(...citations);
  for (let i = min; i < max; i++) {
    const h = citations.filter((item) => item >= i);
    if (h.length >= i && answer < i) {
      answer = i;
    }
  }
  if (max === 0) return 0;
  if (answer === 0) return citations.length;
  return answer;
}

solution([0, 0, 0, 0, 0, 0, 0]);
