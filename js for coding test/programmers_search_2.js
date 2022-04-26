function solution(numbers) {
    var answer = [];
    let nums = numbers.split(''); 
    
    // 소수 판별
    const isPrimeNum = (num) => {
        if(num<=1) return false;
        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    //순열
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newNum = fixed + arr[i]; // arr[i]를 뒤에 붙여줌
                const copyArr = [...arr];
                copyArr.splice(i, 1); // 붙여진 arr[i]는 제외
                if (!answer.includes(+newNum) && isPrimeNum(+newNum)){
                    answer.push(+newNum) // answer가 newNum이 없고 newNum이 소수인 경우에 push
                }
                getPermutation(copyArr, newNum); // 재귀함수로 계속 반복
            }
        }
    }


    getPermutation(nums, '');
    return answer.length;
}