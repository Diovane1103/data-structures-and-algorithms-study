
// Time complexity -> O(n^2) -> Quadratic time complexity
// Space complexity -> O(1)
function selectionSort(arr) {
	const length = arr.length;
	for(let i = 0; i < length; i++) {
    // set current index as minimum
    let temp = arr[i];
    let min = i;
		for(let j = i + 1; j < length; j++) {
      // if minimum is bigger than current index
			if(arr[min] >= arr[j]) {
        // update the minimum index to the current index
				min = j;
			}
		}

    // Swap the numbers
    arr[i] = arr[min];
    arr[min] = temp;
	}

  return arr;
}

console.log(selectionSort([38307, 19872, 7377, 85298, 93323, 81505, 99980, 58217, 61495, 9951, 6704, 62383, 92341, 9551, 59436, 83150, 28414, 25323, 18543, 2592, 68777, 23164, 34725, 15426, 56666, 72522, 5129, 17216, 50386, 80230, 34049, 78350, 45588, 2736, 83149, 76327, 11917, 84006, 44075, 52667, 20185, 69732, 98146, 84085, 99552, 973, 65087, 7178, 61881, 93760, 65665, 82134, 45922, 40998, 72041, 28832, 94322, 74979, 28575, 51186, 7100, 25367, 59348, 28362, 33174, 63443, 29425, 15676, 96586, 29090, 530, 94377, 14592, 66626, 76607, 76304, 14996, 17995, 50913, 35930, 24151, 97452, 47794, 22563, 16302, 74340, 2275, 95062, 95876, 3468, 23332, 64592, 21906, 86393, 35395, 20771, 11547, 72795, 70570, 54588]));
