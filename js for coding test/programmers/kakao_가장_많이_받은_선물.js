function solution(friends, gifts) {
  const giveMap = {}; // 선물 받은 리스트
  const takeMap = {}; // 선물 준 리스트
  const diffMap = {}; // 선물지수
  const nextMonthGift = {}; // 다음달에 받을 선물 개수

  gifts.forEach((gift) => {
    const [to, from] = gift.split(" ");

    // 선물을 받음
    if (!takeMap[from]) {
      takeMap[from] = [];
    }

    // 선물을 줌
    if (!giveMap[to]) {
      giveMap[to] = [];
    }

    takeMap[from].push(to);
    giveMap[to].push(from);
  });

  // 선물 지수 계산
  friends.forEach((name) => {
    const [give, take] = [
      giveMap[name] ? giveMap[name].length : 0,
      takeMap[name] ? takeMap[name].length : 0,
    ];
    diffMap[name] = give - take;
  });

  // 다음달에 가장 선물을 많이 받을 사람 구하기
  let check = [];

  friends.forEach((takeName) => {
    friends.forEach((giveName) => {
      if (takeName === giveName) return;
      if (check.includes(giveName)) return;

      const giveGift =
        giveMap[takeName]?.filter((name) => name === giveName).length ?? 0; // takeName이 giveName에게 준거
      const takeGift =
        giveMap[giveName]?.filter((name) => name === takeName).length ?? 0;
      // giveName이 takeName에게 준거

      // 초기화
      if (!nextMonthGift[takeName]) nextMonthGift[takeName] = 0;
      if (!nextMonthGift[giveName]) nextMonthGift[giveName] = 0;

      if (giveGift > takeGift) {
        // takeName이 giveName에게 준 선물이 더 많으면
        nextMonthGift[takeName]++; // takeName 1개 추가
      } else if (giveGift < takeGift) {
        // giveName이 takeName에게 준 선물이 더 많으면
        nextMonthGift[giveName]++; // giveName 1개 추가
      } else {
        // 서로 주고 받은 횟수가 같으면 선물지수 비교
        if (diffMap[takeName] > diffMap[giveName]) {
          nextMonthGift[takeName]++;
        } else if (diffMap[takeName] < diffMap[giveName]) {
          nextMonthGift[giveName]++;
        }
      }
    });
    check.push(takeName);
  });

  return Object.values(nextMonthGift).sort((a, b) => b - a)[0];
}
