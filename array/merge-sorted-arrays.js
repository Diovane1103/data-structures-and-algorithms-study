// Create a function that will merge 2 sorted arrays
// [0, 3, 4, 31]
// [4, 6, 30]

// Explained example
function mergeSortedArrays1(arr1, arr2) {
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.length === 0) {
    return array1;
  }
  if (arr2.length === 0) {
    return array2;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

// Short and clean example
const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => {
    if (a <= b) return -1;
    return 1;
  });
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));