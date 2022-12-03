function solution(priorities, location) {
  let print = [];
  let stack = [];
  priorities.map((item, index) => stack.push([index, item]));
  while (stack.length > 0) {
    let now = stack[0];
    stack.shift();
    if (stack.findIndex((item) => item[1] > now[1]) !== -1) {
      stack.push(now);
    } else {
      print.push(now);
    }
  }

  answer = print.findIndex((value, index) => value[0] === location) + 1;
  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0);
