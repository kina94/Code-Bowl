function solution(nums) {
  let answer = "";
  let obj = {};
  const max = nums.length / 2;

  for (let phone of nums) {
    obj[phone] === undefined ? (obj[phone] = 1) : (obj[phone] += 1);
  }

  if (Object.keys(obj).length <= max) {
    answer = Object.keys(obj).length;
  } else {
    answer = max;
  }

  return answer;
}

solution([3, 1, 2, 3]);
