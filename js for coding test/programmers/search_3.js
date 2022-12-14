function solution(numbers) {
  let answer = new Set();
  const arr = numbers.split(""); // [0,1,2]

  const isDecimal = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const getPermutation = (comb, others) => {
    if (others.length >= 1) {
      for (let i = 0; i < others.length; i++) {
        const newComb = comb + others[i];
        const newArr = [...others];
        newArr.splice(i, 1);
        if (isDecimal(+newComb)) answer.add(+newComb);
        getPermutation(newComb, newArr);
      }
    }
  };

  getPermutation("", arr);

  return answer.size;
}

solution("011");

//[0,1,2]
//arr[0]
//arr[0] + arr[1]
//arr[0] + arr[1] + arr[2]

//arr[0] + arr[2]
//arr[0] + arr[2] + arr[1]

//arr[1]
//arr[1] + arr[0]
//arr[1] + arr[2]
//arr[1] + arr[0] + arr[2]
//arr[1] + arr[2] + arr[0]
