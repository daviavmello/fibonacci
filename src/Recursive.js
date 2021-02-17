let arr = [0, 1];
export const recursive = (arrLength) => {
  const t0 = performance.now();
  let firstNum = arr[arr.length - 2];
  let secondNum = arr[arr.length - 1];

  let nNum = firstNum + secondNum;
  arr.push(nNum);
  firstNum = secondNum;
  secondNum = nNum;

  if (arr.length < arrLength) {
    recursive(arrLength);
  }
  const t1 = performance.now();
  return (t1 - t0) * 1000;
}

export const recursiveArr = [
  recursive(1),
  recursive(5),
  recursive(10),
  recursive(50),
  recursive(100),
  recursive(500),
  recursive(1000),
  recursive(5000),
  recursive(8000),
];

console.log(`recursiveArr = [
recursive(1): ${recursive(1)},
recursive(5): ${recursive(5)},
recursive(10): ${recursive(10)},
recursive(50): ${recursive(50)},
recursive(100): ${recursive(100)},
recursive(500): ${recursive(500)},
recursive(1000): ${recursive(1000)},
recursive(5000): ${recursive(5000)},
recursive(8000): ${recursive(8000)} ]`);
