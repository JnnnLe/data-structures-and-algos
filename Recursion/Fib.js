const fibinacci = (n) => {
  if (n == 0) return 0;
  if (n == 1 || n == 1) return 1;
  return fibinacci(n - 1) + fibinacci(n - 2);
};


// Implementing Fibinacci sequence, using recursion and caching.
const memoization_fib = (n, memo = []) => {
  memo = [0, 1, 1];
  if (memo[n] != null) return memo[n];
  return memo[n] = memoization_fib(n - 1) + memoization_fib(n - 2);
}