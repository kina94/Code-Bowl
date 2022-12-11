function solution(sizes) {
  let answer = 0;
  const convertSizes = sizes.map(([width, height]) => {
    if (width < height) {
      const newValues = [width, height];
      const widthTemp = newValues[0];
      newValues[0] = height;
      newValues[1] = widthTemp;
      return newValues;
    } else {
      return [width, height];
    }
  });

  let [maxWidth, maxHeight] = [0, 0];

  convertSizes.map(([width, height]) => {
    if (width >= maxWidth) {
      maxWidth = width;
    }
    if (height >= maxHeight) {
      maxHeight = height;
    }
  });
  answer = maxWidth * maxHeight;
  return answer;
}

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
