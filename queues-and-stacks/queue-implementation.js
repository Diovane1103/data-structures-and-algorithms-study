class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    
    if(this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  dequeue() {
    const leader = this.first;

    if(this.isEmpty()) {
      return leader;
    }

    if(this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }

  isEmpty() {
    return !this.first
  }
}

// FIFO (First In First Out)
// Enqueue: Discord -> Udemy -> Google -> Amazon -> Reddit -> Facebook -> Instagram
// Dequeue: Udemy -> Google -> Amazon -> Reddit -> Facebook -> Instagram
// Peek: Discord
// isEmpty: false

const queue = new Queue();
queue.enqueue('Discord');
queue.enqueue('Udemy');
queue.enqueue('Google');
queue.enqueue('Amazon');
queue.enqueue('Reddit');
queue.enqueue('Facebook');
queue.enqueue('Instagram');
// console.log(queue.isEmpty());
// console.log(queue.peek());
queue.dequeue();

console.log(JSON.stringify(queue, null, 2));