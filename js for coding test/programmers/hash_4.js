function solution(genres, plays) {
  const trackSum = {};
  const init_arr = [];
  const answer = [];

  for (let i in genres) {
    init_arr.push([genres[i], plays[i], Number(i)]);
  }

  const sortedArray = init_arr.sort((a, b) => (a[1] > b[1] ? -1 : 1));

  sortedArray.map((item) =>
    trackSum[item[0]] === undefined
      ? (trackSum[item[0]] = item[1])
      : (trackSum[item[0]] += item[1])
  );

  const sortedTrackSum = Object.keys(trackSum).sort((a, b) => {
    return trackSum[b] > trackSum[a] ? 1 : -1;
  });

  for (let key of sortedTrackSum) {
    let temp_arr = [];
    for (let i in sortedArray) {
      if (sortedArray[i][0] === key) {
        temp_arr.push(sortedArray[i][2]);
        if (temp_arr.length === 2) {
          break;
        }
        answer.push(temp_arr);
      }
    }
  }

  return answer.flat();
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 501, 800, 900]
);
