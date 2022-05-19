function solution(nums) {
    var answer = 0;

    const isPrime = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if (isPrime(sum)) answer += 1
            }
        }
    }
    return answer;
}

let nums = [1, 2, 3, 4]
solution(nums)