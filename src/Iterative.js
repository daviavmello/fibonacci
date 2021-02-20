export const iterative = (arrLength) => {
  const t0 = performance.now();
  let arr = [0, 1];

  for (let i = arr.length; i < arrLength; i++) {
    let nNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nNum);
  }
  const t1 = performance.now();
  return (t1 - t0) * 1000000;
}

export const iterativeArr = [
  iterative(1),
  iterative(5),
  iterative(10),
  iterative(50),
  iterative(100),
  iterative(500),
  iterative(1000),
  iterative(5000),
  iterative(8000),
];

console.log(iterativeArr);

console.log(`iterativeArr = [
  iterative(1): ${iterative(1)},
  iterative(5): ${iterative(5)},
  iterative(10): ${iterative(10)},
  iterative(50): ${iterative(50)},
  iterative(100): ${iterative(100)},
  iterative(500): ${iterative(500)},
  iterative(1000): ${iterative(1000)},
  iterative(5000): ${iterative(5000)},
  iterative(8000): ${iterative(8000)} ]`);
  