// recursively reverse a string
const reverse = (str, fun = []) => {
  let split = str.split('');

  // if (str.length == 0) 
  //   return fun.join('');

  while (str.length != 0) {
    fun.push(split.pop());
    str = split.join('');
    return reverse(str, fun);
  };

  return fun.join('');
};

// recursively reverse a string
const reverse2 = (str, fun = []) => {
  let split = str.split('');

  if (str.length == 0) 
    return fun.join('');

  else {
    fun.push(split.pop());
    str = split.join('');
    return reverse(str, fun);
  };
};