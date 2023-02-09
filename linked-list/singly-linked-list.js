class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  // O(n) -> You depend on index, can be O(1) if the index overflow occurs or index is less than 1
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
    const leader = this.traverseToIndex(index-1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    
    return this;
  }

  // Same as lookup so its O(n)
  traverseToIndex(index) {
    let currentNode = this.head;
    while(index) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  // O(n)
  remove(index) {
    if(typeof index !== 'number' || index >= this.length || index < 0) {
      return this;
    }

    if (!index) {
     this.head = this.head.next;
     this.length--;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;

      leader.next = unwantedNode.next;
      this.length--;

      if(index === this.length -1)
        this.tail = leader;
    }

    return this;
  }

  reverse() {
    if(!this.head.next) {
      return this;
    }
      
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;
    
    while(currentNode) {
      
      // 1. get the nextNode from the currentNode
      // we have to grab it first because in the next step
      // we are going to lose the pointer
      nextNode = currentNode.next;

      // 2. set the currentNode.next to the previousNode
      // we are basically now connecting the node in reverse
      currentNode.next = prevNode;

      // 3. move the current in the previousNode
      // now the currentNode have served its purpose,
      // and we move it into the previous,
      // to be assigned as a previous node in the next iteration
      prevNode = currentNode;

      // 4. move the next into the current so
      // that the loop can keep on iterating
      // we need to continue iterating, by assigning next
      // to current the loop can continue to iterate
      currentNode = nextNode;
    }

     //5. assign the head to the tail
    this.tail = this.head;

    //6. assign the end of the linkedlist to the head
    this.head = prevNode;

    return this;
  }

  reverseList(head) {
    if(!head || !head.next) {
      return head;
    }
    const reversedListHead = this.reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedListHead;
  }

}

// 10 --> { head: { value 10, next: null }, tail: { 10, next: null }, length: 1 }
// 10 -> 5 --> { head: { value 10, next: { value: 5, next: null } }, tail: { 5, next: null }, length: 2 }
// 10 -> 5 -> 16 --> { head: { value 10, next: { value: 5, next: { value: 16, next: null } } }, tail: { 16, next: null }, length: 3 }
// 67 -> 1 -> 10 -> 99 -> 5 -> 16 -> 34
const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1); 
myLinkedList.insert(2, 99);
myLinkedList.insert(-1, 67);
myLinkedList.insert(10, 34);
myLinkedList.insert(true, 50);
myLinkedList.remove(0);
myLinkedList.remove(4);
myLinkedList.remove(4);
//myLinkedList.reverse();
myLinkedList.reverseList(myLinkedList.head);
// console.log(myLinkedList.printList());
console.log(JSON.stringify(myLinkedList, null, 2));