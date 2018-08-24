const greatestCommonDivisor = (x, y, greatestDivisior = 0, i = 2) => {
  
  if (!x) return y;
  if (!y) return x;
  if (!x && !y) return 1;

  let minVal = Math.min(x, y);
  while (i <= minVal) {
    if ((x % i == 0) && (y % i == 0)) {
      greatestDivisior = i
    };

    i++;
    return greatestCommonDivisor(x, y, greatestDivisior, i)
  };
  
  return greatestDivisior;
};

greatestCommonDivisor(8, 12);