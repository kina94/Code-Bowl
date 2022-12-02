function solution(s) {
  if (s[0] === ")") return false;

  let cnt1 = 0;
  let cnt2 = 0;

  for (let item of s) {
    if (cnt1 < cnt2) break;
    if (item === "(") {
      cnt1++;
    } else {
      cnt2++;
    }
  }

  if (cnt1 === cnt2) {
    return true;
  } else {
    return false;
  }
}

solution("()()");
// ) () (
// ((()))
// ()()(())
// (()()))
