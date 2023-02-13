const array = [38307, 19872, 7377, 85298, 93323, 81505, 99980, 58217, 61495, 9951, 6704, 62383, 92341, 9551, 59436, 83150, 28414, 25323, 18543, 2592, 68777, 23164, 34725, 15426, 56666, 72522, 5129, 17216, 50386, 80230, 34049, 78350, 45588, 2736, 83149, 76327, 11917, 84006, 44075, 52667, 20185, 69732, 98146, 84085, 99552, 973, 65087, 7178, 61881, 93760, 65665, 82134, 45922, 40998, 72041, 28832, 94322, 74979, 28575, 51186, 7100, 25367, 59348, 28362, 33174, 63443, 29425, 15676, 96586, 29090, 530, 94377, 14592, 66626, 76607, 76304, 14996, 17995, 50913, 35930, 24151, 97452, 47794, 22563, 16302, 74340, 2275, 95062, 95876, 3468, 23332, 64592, 21906, 86393, 35395, 20771, 11547, 72795, 70570, 54588];

const buildMaxHeap = arr => {
  // Get index of the middle element
  let i = Math.floor(arr.length / 2 - 1);

  //Build a max heap out of all array elements passed in
  while(i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

const heapify = (heap, i, max) => {
  let index, leftChild, rightChild;

  while (i < max) {
    index = i;

    // Get the left child index
    // Using known formula
    leftChild = 2 * i + 1;

    // Get the left child index
    // Using known formula
    rightChild = leftChild + 1;

    // if left child is not last element
    // And its value is bigger
    if(leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // if right child is not last element
    // And its value is bigger
    if(rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if(index === i) {
      return;
    }

    swap(heap, i, index);

    i = index;
  }
}

const swap = (arr, firstItemIndex, lastItemIndex) => {
  const temp = arr[firstItemIndex];

  // Swap first and last items in the array
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;
}

const heapSort = arr => {
  // Build max heap
  buildMaxHeap(arr);

  // Get the index of the last element
  lastElement = arr.length -1;

  // Continue heap sorting until we have one element left
  while(lastElement > 0) {
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }

  // Return sorted array
  return arr;
}

console.log(heapSort(array));