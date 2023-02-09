// Example: [2, 7, 9, 10], 9 -> Should return [0, 1]
// Example: [2, 5, 10, 14], 12 -> Should return [0, 2]

// My solution
const twoSum = (nums, target) => {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
      if(comp[nums[i]] !== undefined) {
          return [comp[nums[i]], i];
      }
      comp[target - nums[i]] = i;
  }
};

// Best solution
const twoSum1 = (nums, target) => {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let tarValue = target - nums[i];
    let matchValue = map.get(tarValue);

    if(matchValue !== undefined) {
      return [matchValue, i];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 9, 10], 9));
console.log(twoSum([2, 5, 10, 14], 12));