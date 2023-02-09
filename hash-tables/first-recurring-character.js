// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// O(n^2) Time Complexity
// O(1) Space Complexity
const firstRecurringCharacterUsingNestedLoops = array => { 
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        return array[j];
      }
    }
  }
  return undefined;
}

// O(n) Time complexity
// O(n) Space complexity
const firstRecurringCharacterUsingMap = array => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if(map.get(array[i])) {
      return array[i];
    }
    map.set(array[i], true);
  }
  return undefined;
}

// O(n) Time complexity
// O(n) Space complexity
const firstRecurringCharacterUsingObject = array => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if(map[array[i]]) {
      return array[i];
    }
    map[array[i]] = true;
  }
  return undefined;
}

const firstRecurringCharacterUsingSet = array => {
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    if(set.has(array[i])) {
      return array[i];
    }
    set.add(array[i]);
  }
  return undefined;
}

console.log(firstRecurringCharacterUsingMap([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacterUsingMap([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacterUsingMap([2,3,4,5]));
console.log(firstRecurringCharacterUsingMap([]));
