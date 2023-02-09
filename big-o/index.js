// BIG O 
// Rule 1 -> Always Worst Case
// Rule 2 -> Remove Constants
// Rule 3 -> Different inputs should have different variables. O(a+b). A and B arrays nested would be
// O(a*b)
// + for steps in order
// * for nested steps */
// Rule 4 -> Drop Non-Dominant terms


const nemo = ['nemo', 'loki', 'luke', 'peter', 'timber', 'thomas', 'thor', 'odin', 'sam', 'hector'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {  // O(n) -- Linear time
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

//logFirstTwoBoxes(boxes); // O(1) -> Constant time

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }

  return a; // O(1)
}

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n) 
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// O (4 + 7n)
// O(n)

// log all pairs of array
const numbers = ['a','b','c','d','e'];

function logAllPairsOfArray(array) { // O(n^2) -> Quadratic time
  array.forEach(num => {
    array.forEach(n => {
      console.log(num, n);
    })
  })
}

logAllPairsOfArray(numbers);


function compressBoxesTwice(boxes, boxes2) { // O(a + b)
  boxes.forEach(box => {
    console.log(box);
  })

  boxes2.forEach(box => {
    console.log(box);
  })
}


function compressBoxesTwice(boxes, boxes2) { // O(a * b)
  boxes.forEach(box => {
    boxes2.forEach(b => {
      console.log(box, b);
    })
  })
}

const array = [
  {tweet: 'hy', date: 2010}, 
  {tweet: 'my', date: 2012}, 
  {tweet: 'diovane', date: 2018}
];

array[0] // O (1)
array[array.length -1] // O(1)