function hasPairWithSum(data, sum) {
  const comp = new Set();
  for (let value of data) {
    if(comp.has(value)) {
      return true;
    }
    comp.add(sum - value);
  }
  return false;
}

console.log(hasPairWithSum([1,2,3,9], 8))
console.log(hasPairWithSum([1,2,4,4], 8))
