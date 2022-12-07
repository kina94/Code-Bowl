function solution(numbers) {
  let answer = "";
  const stringNumbers = numbers
    .map((item) => String(item))
    .sort((a, b) => (b + a - (a + b) > 0 ? 1 : -1))
    .join("");
  stringNumbers[0] === "0" ? (answer = "0") : (answer = stringNumbers);
  return answer;
}

solution([3, 30, 34, 5, 9]);
