function solution(n, m) {
    const gcd = greatestCommonDivisor(n, m);
    return [gcd, (n * m) / gcd];
  }
  
  const greatestCommonDivisor = (a, b) => {
    if (b === 0) return a;
    else return greatestCommonDivisor(b, a % b);
  };

let n = 3
let m = 12
solution(n,m)