const insertionSort = (arr) => {
  let temp;

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i];

    while (j > 0 && [temp] < arr[j-1]) {
      arr[j] = arr[j-1];
      j--;
    }  

    arr[j] = temp;
  }

  return arr;
};

insertionSort([5,4,3,2,1]);