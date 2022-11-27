function solution(clothes) {
  let answer = 1;
  let clothes_ob = {};

  clothes.map(([item, key]) => {
    clothes_ob[key] === undefined
      ? (clothes_ob[key] = [item])
      : (clothes_ob = { ...clothes_ob, [key]: [...clothes_ob[key], item] });
  });

  Object.keys(clothes_ob).map((category) => {
    answer = answer * (clothes_ob[category].length + 1);
  });

  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
