function rob(nums) {
  if(nums) return 0; 
  if(nums.length === 1) return nums[0];

  let dp = [nums[0], Math.max(nums[0], nums[1])];

  for(let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  }

  return dp[nums.length - 1];
}

var rob = function(nums) {
  let maxTwo = 0;
  let maxOne = 0;

  for (let i = 0; i < nums.length; i++){
    let maxCurrent = Math.max(nums[i] + maxTwo, maxOne);
    maxTwo = maxOne;
    maxOne = maxCurrent;
  } 

  return maxOne;
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));