function SumBorders(mtrz) {
    let add = 0;
    for (let y = 0; y < mtrz.length; y++) {
      for (let x = 0; x < mtrz[y].length; x++) {
        if (y === 0 || y === mtrz.length - 1) {
          add += mtrz[y][x];
        } else {
          if (x === 0 || x === mtrz[y].length - 1) {
            add += mtrz[y][x];
          }
        }
      }
    }
    return add;
  }
  
  let mtrz = [
    [2, 3, 4],
    [5, 2, 7],
    [-1, 2, -7],
  ];
  console.log(SumBorders(mtrz));
  