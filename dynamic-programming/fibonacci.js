
// Great example of memoization, closure and recursion
// Time Complexity -> O(n)
function methods() {
  let cache = {};

  return function fibonacci (n) {
    if (n in cache) return cache[n];

    if (n <= 2) return 1;
  
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  }
}

const fibonacci = methods();

console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(6));
console.log(fibonacci(12));
console.log(fibonacci(8));
console.log(fibonacci(15));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(100));