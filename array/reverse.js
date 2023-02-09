// Create a function that reverses a string:
// 'Hi my name is Diovane' should be:
// 'enavoiD si eman ym iH'

// "Hi" = "iH" when call reverse()

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'wrong input'; 
  
  const backwards = [];
  const totalItems = str.length - 1;

  for(let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

// 
const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Hi my name is Diovane'));