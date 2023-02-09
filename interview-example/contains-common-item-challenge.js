// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// -------------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// Questions
// How large this array is gonna be?
// Time complexity is more important than Space complexity to this function?
// I can receive an empty array, as any param? yes
// There is only strings inside the array? yes
// There is duplicated data inside of any array? yes

// 2 params - arrays - no size limit

// if pass 'a' i add it to a set and if find another 'a' will return true else return false

// Try using the brute force algorithm (don't need to code), then improve it telling the interviewer with yout tought process

// Brute force example
// O(a * b) - Time complexity and O(1) - Space complexity
function containsCommonItem1(arr1, arr2) { 
  for (let value of arr1) {
    for (let val of arr2) {
      if (val === value) {
        return true;
      }
    }
  }

  return false;
}


// My way of dealing with this challenge
// Time Complexity O(a + b) and Space Complexity O(a)
function containsCommonItem2(arr1, arr2) {
  const values = new Set();
  for(let value of arr1) {
    values.add(value);
  }

  for(let value of arr2) {
    if(values.has(value)) {
      return true;
    }
  }

  return false;
}

// Andrei solution
// Time Complexity O(a + b) and Space Complexity O(a)
function containsCommonItem3(arr1, arr2) {
  let map = {};
  for(let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for(let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

// Another solution
// O(1) - Time complexity and O(a + b) Space complexity
function containsCommonItem4(arr1, arr2) {
  const join = [...arr1, ...arr2];
  return new Set(join).size !== join.length;
}

// Another solution
// O(a * b) Time complexity and O(1) Space complexity
function containsCommonItem5(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];
const array4 = ['g', 'b', 'c', 'a', 'a'];
const array5 = [1, 2, 3, 4, 5];
const array6 = ['6', '7', '3'];

console.log(containsCommonItem5(array4, array1)); // Should be true
console.log(containsCommonItem5(array1, array3)); // Should be true
console.log(containsCommonItem5([], array3)); // Should be false
console.log(containsCommonItem5(array1, [])); // Should be false
console.log(containsCommonItem5(array1, array2)); // Should be false
console.log(containsCommonItem5(array5, array6)); // Should be false
