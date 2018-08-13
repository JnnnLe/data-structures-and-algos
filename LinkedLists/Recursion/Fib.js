const fibinacci = (n) => {
  if (n == 0) return 0;
  if (n == 1 || n == 1) return 1;
  return fibinacci(n - 1) + fibinacci(n - 2);
}