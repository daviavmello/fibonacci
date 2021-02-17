export const IterativeData = arrLength => {
  function iterative(arrLength) {
    let arr = [0, 1];

    for (let i = arr.length; i < arrLength; i++) {
      let nNum = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(nNum);
    }
  }

  const t0 = performance.now();
  iterative(arrLength);
  const t1 = performance.now();
  // console.log(`Using iterative takes ${(t1 - t0) * 1000000} nanoseconds`);
  return (t1 - t0) * 1000000;
};
