const binarySearch = (arr, target) => {
  let midpoint = Math.floor(arr.length / 2);

  if (arr[midpoint] == target) {
    return true;
  } else {
    if (target > arr[midpoint]) {
      return binarySearch(arr.splice(midpoint));
    }
    if (target < arr[midpoint]) {
      return binarySearch((arr.splice(0, midpoint)), target);
    }
  }
  return false;
};

binarySearch([7,8,9,10,11,12,13], 8);