class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.bottom = newNode;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;

    return this;
  }

  pop() {
    const leader = this.top;

    if(this.isEmpty()) {
      return leader;
    }

    if(this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = leader.next;
    this.length--;

    return this;
  }

  isEmpty() {
    return !this.top
  }
}

// LIFO (Last In First Out)
// Push: Instagram -> Facebook -> Reddit -> Amazon -> Google -> Udemy -> Discord
// Pop: Facebook -> Reddit -> Amazon -> Google -> Udemy -> Discord
// Peek: Facebook
// isEmpty: false

const stack = new Stack();
stack.push('Discord');
stack.push('Udemy');
stack.push('Google');
stack.push('Amazon');
stack.push('Reddit');
stack.push('Facebook');
stack.push('Instagram');
// console.log(stack.isEmpty());
//console.log(stack.peek());
stack.pop();

console.log(JSON.stringify(stack, null, 2));