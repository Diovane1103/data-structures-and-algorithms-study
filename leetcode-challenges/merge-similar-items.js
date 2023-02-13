const items1 = [[1,1], [4,5], [3,8]];
const items2 = [[3,1], [1,5]];
const items3 = [[1,1], [3,2], [2,3]];
const items4 = [[2,1], [3,2], [1,3]];
const items5 = [[1,3], [2,2]];
const items6 = [[7,1], [2,2], [1,4]];

const mergeSimilarItems = (items1, items2) => {
  const map = new Map();

  for(let [value, weight] of [...items1, ...items2]) {
    if(!map.has(value)) {
      map.set(value, weight);
    } else {
      map.set(value, map.get(value) + weight);
    }
  }

  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}

console.log(mergeSimilarItems(items1, items2));
// [[1,6], [3,9], [4,5]]
console.log(mergeSimilarItems(items3, items4));
// [[1,4], [2,4], [3,4]]
console.log(mergeSimilarItems(items5, items6));
// [[1,7], [2,4], [7,1]]