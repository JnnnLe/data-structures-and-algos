const toBinary = (n) => {
  let value = n,
      binary = '';

  while (value > 0) {
    binary = (value % 2) + binary;
    value = Math.floor(value / 2);
  };

  return binary;
};

const binary = (n) => {
  let number = parseInt(n, 10);
  return number.toString(2);
};

const fun = (n) => {
  return (parseInt(n, 10)).toString(2); 
}