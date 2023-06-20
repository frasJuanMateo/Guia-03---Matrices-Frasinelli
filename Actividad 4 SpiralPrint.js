function SpiralPrint(mtrz) {
    let arrRes = [0];
    let index = -1;
    let spiral = -1;
    let maxValue = mtrz.length * mtrz[0].length;
  
    while (index < maxValue) {
      spiral++;
      let x = 0 + spiral;
      let y = 0 + spiral;
  
      for (x = 0 + spiral; x < mtrz[y].length - spiral; x++) {
        index++;
        arrRes[index] = mtrz[y][x];
      }
  
      x -= 1;
      if (index == maxValue - 1) {
        break;
      }
      for (y = 1 + spiral; y < mtrz.length - 1 - spiral; y++) {
        index++;
        arrRes[index] = mtrz[y][x];
      }
      if (index == maxValue - 1) {
        break;
      }
      for (x = mtrz[y].length - 1 - spiral; x >= 0 + spiral; x--) {
        index++;
        arrRes[index] = mtrz[y][x];
      }
  
      x += 1;
      if (index == maxValue - 1) {
        break;
      }
      for (y = mtrz.length - 2 - spiral; y > 0 + spiral; y--) {
        index++;
        arrRes[index] = mtrz[y][x];
        if (index == maxValue - 1) {
          break;
        }
      }
    }
    return arrRes;
  }
  
  let mtrz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(SpiralPrint(mtrz));
  