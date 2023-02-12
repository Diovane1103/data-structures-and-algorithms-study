//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursively(str) {
  if(str.length === 1) return str;
  return str[str.length - 1] + reverseStringRecursively(str.substring(0, str.length - 1));
}

// console.log(reverseStringRecursively('yoyo mastery'));
//should return: 'yretsam oyoy'

function reverseStringIteratively(str) {
  let answer = '';

  for(let i = 1; i <= str.length; i++) {
    answer += str[str.length - i];
  }

  return answer;
}

console.log(reverseStringIteratively('yoyo mastery'));