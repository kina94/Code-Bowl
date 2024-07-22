function solution(bandage, health, attacks) {
  const [recoverMaxTime, recoveryPerTime, additionalRecovery] = bandage;
  const endTime = attacks.slice(-1)[0][0];

  let currentHp = health; // 캐릭터 체력
  let successCount = 0; // 붕대감기 성공 카운트

  for (let time = 0; time <= endTime; time++) {
    // 공격
    const attacked = attacks.filter((attack) => attack[0] === time);
    if (attacked.length) {
      const damage = attacked[0][1];
      currentHp -= damage;
      successCount = 0;
      if (currentHp <= 0) {
        currentHp = -1; // 체력이 0 이하로 떨어지면 사망
        break;
      }
    } else {
      // 체력이 꽉 차있는 경우 최대 체력을 유지
      if (currentHp >= health) {
        currentHp = health;
      } else {
        // 회복
        currentHp += recoveryPerTime;
        successCount++;
        // 연속 붕대 감기에 성공한 경우
        if (successCount === recoverMaxTime) {
          currentHp += additionalRecovery;
          successCount = 0;
        }
      }
    }
  }

  return currentHp;
}
