function ArrayToSpiral(arr) {
    let size = Math.sqrt(arr.length);
    let mtrz = new Array(size);
    let index = -1;
    let spiral = -1;
  
    for (let j = 0; j < size; j++) {
      mtrz[j] = new Array(size);
  
      for (let i = 0; i < size; i++) {
        mtrz[j][i] = 0;
      }
    }
  
    while (index < arr.length) {
      spiral++;
      let x,
        y = 0 + spiral;
      for (x = 0 + spiral; x < size - spiral; x++) {
        index++;
        mtrz[y][x] = arr[index];
      }
  
      if (index == arr.length - 1) {
        break;
      }
      x -= 1;
  
      for (y = 1 + spiral; y <= size - 2 - spiral; y++) {
        index++;
        mtrz[y][x] = arr[index];
      }
  
      if (index == arr.length - 1) {
        break;
      }
      for (x = size - 1 - spiral; x >= 0 + spiral; x--) {
        index++;
        mtrz[y][x] = arr[index];
      }
  
      if (index == arr.length - 1) {
        break;
      }
      x += 1;
  
      for (y = size - 2 - spiral; y >= 1 + spiral; y--) {
        index++;
        mtrz[y][x] = arr[index];
      }
  
      if (index == arr.length - 1) {
        break;
      }
    }
  
    return mtrz;
  }
  //¡¡Solo funciona con matrices cuadradas!!
  
  let arr2x2 = [1, 2, 4, 3];
  let arr3x3 = [2, 4, 6, 3, 5, 7, 1, 2, 3];
  let arr4x4 = [2, 4, 6, 3, 5, 7, 1, 2, 3, 8, 9, 5, 3, 4, 8, 6];
  console.log(ArrayToSpiral(arr2x2));
  console.log(ArrayToSpiral(arr3x3));
  console.log(ArrayToSpiral(arr4x4));
  