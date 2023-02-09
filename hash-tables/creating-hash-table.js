class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) { // O(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  get(key) { // O(1) most of the times, but can be O(n)
    let address = this._hash(key)
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  set(key, value) { // O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  
  keys() { // O(n)
    const keys = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }

  entries() { // O(n)
    const entries = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        entries.push(this.data[i][0][1]);
      }
    }
    return entries;
  }

  keysWithoutCollision() { // O(n^2)
    if (!this.data.length) {
      return undefined
    }
    const result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0][0])
          } 
        }
    }
    return result; 
  }

  entriesWithoutCollision() { // O(n^2)
    if (!this.data.length) {
      return undefined
    }
    const result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][1])
            }
          } else {
            result.push(this.data[i][0][1])
          } 
        }
    }
    return result; 
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)
myHashTable.set('oranges', 80)
myHashTable.set('peaches', 140)
myHashTable.set('strawberries', 600)
myHashTable.set('melons', 20)
myHashTable.set('bananas', 50)
myHashTable.set('blueberries', 90)
// console.log(myHashTable.keys());
console.log(myHashTable.keysWithoutCollision().sort());
// console.log(myHashTable.entries());
console.log(myHashTable.entriesWithoutCollision().sort((a, b) => a >= b ? 1 : -1));

