class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  display() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if(typeof index !== 'number') {
      return this;
    }

    if(index >= this.length) {
      return this.append(value);
    } else if (index <= 0) {
      return this.prepend(value);
    }
      
    const newNode = new Node(value);
    const leader = this.traverse(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    
    return this;
  }

  traverse(index) {
    let currentNode = this.head;
    while(index) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  remove(index) {
    if(typeof index !== 'number' || index >= this.length || index < 0) {
      return this;
    }

    if (!index) {
     this.head = this.head.next;
     this.head.prev = null;
     this.length--;
    } else {
      const leader = this.traverse(index - 1);
      const unwantedNode = leader.next;
      const newFollower = unwantedNode.next;
      newFollower.prev = leader;
      leader.next = newFollower;

      this.length--;

      if(index === this.length -1)
        this.tail = leader;
    }

    return this;
  }
}

// 8 -> 7 -> 10 -> 5

const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.prepend(8);
linkedList.insert(1, 7);
linkedList.remove(1);

console.log(linkedList.display());
