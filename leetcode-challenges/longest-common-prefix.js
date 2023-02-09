var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  for (let i = 0; i <= strs[0].length; i++) { // the pattern needs to be in all words thats why it gets the first one
      for (let j = 1; j < strs.length; j++) { // Get the next word
          if (strs[0][i] !== strs[j][i]) {
              return strs[0].slice(0, i); // slicing the word "dog" -> "og" -> "g" -> "" and "flower" -> "fl" 
          }
      }
  }

  return strs[0];
};