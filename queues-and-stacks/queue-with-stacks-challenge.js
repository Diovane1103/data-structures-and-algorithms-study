var Queue = function() {
  this.s1 = [];
  this.s2 = [];
};

// add the value x to the Stack 1
Queue.prototype.push = function(x) {
  this.s1.push(x);
};

// 
Queue.prototype.pop = function() {
  // if s2 has items to pop then he returns the first item that he has
  if(this.s2.length) {
      return this.s2.pop();
  }

  // if s1 has items(length > 0) and s2 doesn't have items he enters the while loop
  while(this.s1.length) {
      // remove the last item from s1 and push it to s2
      this.s2.push(this.s1.pop());
  }

  // then return the last item in s2
  return this.s2.pop();
};

Queue.prototype.peek = function() {
  if(this.s2.length) {
      // returns the last item from s2
      return this.s2.slice(-1);
  }

  // returns the first item from s1
  return this.s1[0];
};

Queue.prototype.empty = function() {
  // check if s1 or s2 is empty, if not returns false else returns true
  return !(this.s1.length || this.s2.length);
};

// Queue
// data: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// push: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
// pop: 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
// peek: 2
// empty: false

// Pop step-by-step
// Step 1
// Stack1: 1,2,3,4,5,6,7
// Stack2: 7

// Step 2
// Stack1: 1,2,3,4,5,6
// Stack2: 7,6

// Step 3
// Stack1: 1,2,3,4,5
// Stack2: 7,6,5

// Step 4
// Stack1: 1,2,3,4
// Stack2: 7,6,5,4

// Step 5
// Stack1: 1,2,3
// Stack2: 7,6,5,4,3

// Step 6
// Stack1: 1,2
// Stack2: 7,6,5,4,3,2

// Step 7
// Stack1: 1
// Stack2: 7,6,5,4,3,2,1

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
// console.log(queue.peek());
// console.log(queue.empty());
queue.pop();
queue.push(8);
queue.push(9);
queue.push(10);
queue.push(11);
queue.push(12);
queue.push(13);
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
// console.log(queue.empty());

console.log(queue);