function isPrime(n) {
    if (n === 2) {
      return true;
    }
    if (n === 1) {
      return false;
    }
    for (let index = 2; index < n; index++) {
      if (n % index == 0) {
        return false;
      }
    }
    return true;
  }
  
  function PrimeSum(mtrz) {
    let addPrime = 0;
    for (let y = 0; y < mtrz.length; y++) {
      for (let x = 0; x < mtrz[y].length; x++) {
        if (isPrime(mtrz[y][x])) {
          addPrime = addPrime + mtrz[y][x];
        }
      }
    }
    return addPrime;
  }
  
  let mtrz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(PrimeSum(mtrz));