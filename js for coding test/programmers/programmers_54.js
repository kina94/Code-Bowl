function solution(str1, str2) {
    var answer = 0;
    const regex = /[^a-zA-Z]/g
    let str1_arr = {}
    let str2_arr = {}
    let inter = {}
    let sum = 0
    let inter_sum=0

    const splitArr = (str, arr) =>{
        for(let i=0; i<str.length-1; i++){
            let word = str[i]+str[i+1]
            word = word.toUpperCase()
            if(!word.match(regex)){
                if(arr[word]===undefined) arr[word]=1
                else arr[word]+=1
            }
        }
    }

    splitArr(str1, str1_arr)
    splitArr(str2, str2_arr)

    Object.keys(str1_arr).map(key=>{
        if(str2_arr[key]!=undefined){ // str2_arr이 str1_arr의 키값을 갖고 있는 경우
            inter[key]=Math.min(str1_arr[key], str2_arr[key])
            str2_arr[key]=Math.max(str1_arr[key], str2_arr[key])
        } else{ //해당 키값이 없으면
            str2_arr[key]=str1_arr[key]
        }
    })

    Object.values(inter).map(item=>inter_sum+=item)
    Object.values(str2_arr).map(item=>sum+=item)

    console.log(inter_sum, sum)

    let num = sum - inter_sum
    if(num===0){
        num=1
    } else{
        num = inter_sum/sum
    }

    answer = Math.floor(num*65536)


    return answer;
}

let str1 = 'FRANCE'
let str2 = 'french'
solution(str1, str2)

//자카드 유사도 : (A 교집합 B).length / (A 합집합 B).length
//A와 B가 같은 원소를 갖고 있으면 해당 원소의 최소 길이가 교집합에 들어감