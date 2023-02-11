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

console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = !node.left ? null : traverse(node.left);
  tree.right = !node.right ? null : traverse(node.right);

  return tree;
}