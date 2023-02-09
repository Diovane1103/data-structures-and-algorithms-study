class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length < 0;
  }

  pop() {
    this.array.pop();
    return this;
  }

  push(value) {
    this.array.push(value);
    return this;
  }
}

const stack = new Stack();
stack.push('Discord');
stack.push('Udemy');
stack.push('Google');
stack.push('Amazon');
stack.push('Reddit');
stack.push('Facebook');
stack.push('Instagram');
//console.log(stack.isEmpty());
//console.log(stack.peek());
stack.pop();

console.log(JSON.stringify(stack, null, 2));