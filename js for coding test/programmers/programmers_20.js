function solution(n, arr1, arr2) {
    var answer = [];
    let arr1_binary = [];
    let arr2_binary = [];
    
    const convertBinary = (arr, arr_binary) =>{
        for(let i=0; i<n; i++){
            arr_binary.push(arr[i].toString(2).split(''))
            if(arr_binary[i].length<arr.length){
                while(arr_binary[i].length<arr.length)
                arr_binary[i].unshift('0')
            }
        }
    }

    convertBinary(arr1, arr1_binary)
    convertBinary(arr2, arr2_binary)

    for(let i=0; i<n; i++){
        let tmp = ''
        for(let j=0; j<n; j++){
            if(arr1_binary[i][j]==='1' || arr2_binary[i][j]==='1'){
                tmp+='#'
            } else if (arr1_binary[i][j]==='0' || arr2_binary[i][j] ==='0'){
                tmp+=' '
            }
        }
        answer.push(tmp)
    }

    return answer;
}

let n = 5
let arr1 = [9, 20, 28, 18, 11]
let arr2 = [30, 1, 21, 17, 28]
solution(n, arr1, arr2)

//벽이1 공백이0
