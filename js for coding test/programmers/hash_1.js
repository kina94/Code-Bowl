function solution(participant, completion) {
  const obj = {};

  for (let value of participant) {
    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value] = obj[value] + 1;
    }
  }

  for (let value of completion) {
    obj[value] -= 1;
  }

  const answer = Object.keys(obj).find((key) => obj[key] !== 0);
  return answer;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
