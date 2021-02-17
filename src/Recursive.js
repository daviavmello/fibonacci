export const RecursiveData = (arrLength) => {
  let arr = [0, 1];
  function recursive(arrLength) {
    let firstNum = arr[arr.length - 2];
    let secondNum = arr[arr.length - 1];

    let nNum = firstNum + secondNum;
    arr.push(nNum);
    firstNum = secondNum;
    secondNum = nNum;

    if (arr.length < arrLength) {
      recursive(arrLength);
    }
  }

  const t0 = performance.now();
  recursive(arrLength);
  const t1 = performance.now();
  // console.log(`Using recursive takes ${(t1 - t0) * 1000000} nanoseconds`);
  return (t1 - t0) * 1000000;
};
