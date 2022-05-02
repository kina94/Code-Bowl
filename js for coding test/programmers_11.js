function solution(nums) {
    const numLen = nums.length;
    const setLen = [...new Set(nums)].length;
    return numLen / 2 >= setLen ? setLen : numLen / 2;
  }

let nums = [3, 1, 2, 3]
solution(nums)
