const strings = ['a', 'b', 'c', 'd', 'e'];

// 4 * 5 = 20 bytes of storage

// look up
//console.log(strings[strings.length - 1]); // O (1)

// push

//console.log(strings.push('f')); // O (1)

// pop
//console.log(strings.pop()); // O (1)

// unshift
strings.unshift('x'); // O (n)

// splice
strings.splice(2, 0, 'alien'); // O (n)

// reference type
[] === [] // returns false
[1] === [1] // returns false
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2 // returns true
object1 === object3 // returns false

1 === 1 // returns true

// context vs scope
//function a() {
//  let a = 4;
//}

// this means where we are right now -> context of where you are


var a = ['a', 'b', 'c'];
a[100] = 'd';
//console.log(a.length);

//console.log('a')

//setTimeout(() => {
//  console.log('b')
//}, 0)

//console.log('c')


const foo = {
  bar() {
    console.log('b');
  },
  name : 'foo'
}

console.log(foo.bar());