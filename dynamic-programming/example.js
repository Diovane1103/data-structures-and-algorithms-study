// Closure and Memoization Example
function memoizedAddTo80() {
  let cache = {};

  return function(n) {
    if(n in cache) {
      return cache[n];
    }
    
    cache[n] = n + 80;
    return cache[n];
  }
}

const memoized = memoizedAddTo80()

console.log('1', memoized(8))
console.log('1', memoized(10));