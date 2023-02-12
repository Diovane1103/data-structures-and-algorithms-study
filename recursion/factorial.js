// Write two functions that finds the factorial of any number. One should use recursive, other should just use a for loop;

// Time Complexity
// O(n)
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;  
  }
  return number * findFactorialRecursive(number-1);
}

// Time Complexity
// O(n)
function findFactorialIterative(number) {
  let answer = 1;

  for(let i = number; i > 1; i--) {
    answer *= i;
  }

  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));