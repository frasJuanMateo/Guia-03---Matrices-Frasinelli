function SumElems(mtrz) {
    let add = 0;
    
    for (let y = 0; y < mtrz.length; y++) {
      for (let x = 0; x < mtrz[y].length; x++) {
        if (mtrz[y][x] % 6 === 0 && mtrz[y][x] > 0 && mtrz[y][x] < 100) {
          add += mtrz[y][x];
        }
      }
    }
    return add;
  }
  
  let mtrz = [
    [12, 3, 4],
    [5, 2, 7],
    [60, 2, 120],
  ];
  console.log(SumElems(mtrz));