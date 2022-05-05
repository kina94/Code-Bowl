function solution(w, h) {
    var answer = 0;
    
    // 제거되는 사각형의 개수 (반복)
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

    let delete_box =  h/gcd(w,h) + w/gcd(w,h) - 1

    answer = (w*h)-(delete_box*gcd(w,h))
    return answer;
}

let w = 8
let h = 12
solution(w, h)