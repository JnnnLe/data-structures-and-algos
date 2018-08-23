// recursively write a map fn that turns lowercase letters to uppercase
const uppercase = (arr, i = 0) => {
  while (i < arr.length) {
    arr[i] = arr[i].toUpperCase();
    i++;
    uppercase(arr, i);  
  };
  return arr;
}