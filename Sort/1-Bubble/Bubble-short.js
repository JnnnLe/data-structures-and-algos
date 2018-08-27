// less code, same effect
const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // by iadding the i on the conditional, it eliminates the unesseccary comparisons of the arr
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  };
  return arr;
};

bubble([10,8,2,3,5,6,7,2,3,16,96,3]);