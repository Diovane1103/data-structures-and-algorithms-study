// Level 0 -> 2 ^ 0 = 1;
// Level 1 -> 2 ^ 1 = 2;
// Level 2 -> 2 ^ 2 = 4;
// Level 3 -> 2 ^ 3 = 8;
// Level n -> 2 ^ n = 2(n);

// Height starts from count of 1
// num of nodes -> (2 ^ height of tree) - 1
// log nodes = steps (the height of the tree)

// Binary Search Tree
// lookup -> O(log n)
// insert -> O(log n)
// remove -> O(log n)

// Phone Book
// You don't check every single person in the phone book
// You do whats is called Divide & Conquer, based on where their names alphabetically begin

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create a new node with the value passed as parameter
    const newNode = new Node(value);

    // check if the root node is null 
    // if true assign the newNode to it 
    // if false traverse the tree to find the right place to insert the newNode
    if(!this.root) {
      this.root = newNode;
    } else {
      // get the root node to traverse from the beginning of the tree
      let currentNode = this.root;

      // loop until we add the newNode to the tree
      while(true) {
        // if value is less than the currentNode value then we go left else we go right
        if(value < currentNode.value) {

          // if currentNode.left is null then we assign the newNode and leave the loop
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // we validate that currentNode has a value in the left yet and assign to currentNode = currentoNode.left and loop through the while again
          currentNode = currentNode.left;
        } else {
          // if currentNode.right is null then we assign the newNode and leave the loop
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // we validate that currentNode has a value in the right yet and assign to currentNode = currentoNode.right and loop through the while again
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    // if root is null return root -> that is null
    if(!this.root) {
      return false;
    }

    // create a variable to assign the reference of the "next" currentNode
    let currentNode = this.root;

    // loop until we find the value we're looking for
    while(currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {        
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      } 
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        // Get the closest value above the one you're removing
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          // Loop until find the leftmost child in the right side
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = new Queue(); // Linked List

    queue.enqueue(currentNode);

    while(!queue.isEmpty()) {
      // Get the first item in the queue and remove it from the queue
      currentNode = queue.dequeue();
      list.push(currentNode.value.value);

      if(currentNode.value.left) {
        queue.enqueue(currentNode.value.left);
      }

      if(currentNode.value.right) {
        queue.enqueue(currentNode.value.right);
      }
    }

    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if(queue.isEmpty()) {
      return list;
    }

    let currentNode = queue.dequeue();
    list.push(currentNode.value.value);

    if(currentNode.value.left) {
      queue.enqueue(currentNode.value.left);
    }

    if(currentNode.value.right) {
      queue.enqueue(currentNode.value.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, []);
  }

  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, []);
  }

  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if(node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.value);

  if(node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if(node.left) {
    traversePreOrder(node.left, list);
  }

  if(node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if(node.left) {
    traversePostOrder(node.left, list);
  }

  if(node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value);

  return list;
}

class QueueNode {
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
    const newNode = new QueueNode(value);
    
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

    return leader;
  }

  isEmpty() {
    return !this.first
  }
}

//       9
//   4       20
// 1   6  15   170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
// console.log(tree.breadthFirstSearch());
// const queue = new Queue();
// queue.enqueue(tree.root);
// console.log(tree.breadthFirstSearchRecursive(queue, []));
console.log(tree.depthFirstSearchInOrder(tree.root, []));
console.log(tree.depthFirstSearchPreOrder(tree.root, []));
console.log(tree.depthFirstSearchPostOrder(tree.root, []));

// Adding complexity
// Not so Beautiful
// tree.insert(21);
// tree.insert(7);
// tree.insert(32);
// tree.insert(189);
// tree.insert(100);
// tree.insert(65);
// tree.insert(89);
// tree.insert(36);
// Beautiful
/* tree.insert(0);
tree.insert(2);
tree.insert(5);
tree.insert(7);
tree.insert(14);
tree.insert(18);
tree.insert(65);
tree.insert(189); */
// Lookup examples
/* console.log(tree.lookup(0));
console.log(tree.lookup(4));
console.log(tree.lookup(15));
console.log(tree.lookup(10)); */
// Remove examples
// tree.remove(1);
// tree.remove(20);
// tree.remove(9);

// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  if(!node) {
    return null;
  }

  return { value: node.value, left: traverse(node.left), right: traverse(node.right) };
}