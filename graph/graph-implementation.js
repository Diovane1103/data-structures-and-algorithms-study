// Edge List
const graph1 = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graph2 = {
  0: [2], 
  1: [2, 3], 
  2: [0, 1, 3], 
  3: [1, 2]
};

// Adjacent Matrix
const graph3 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}

class Graph {
  constructor() {
    this.numberOfVertexes = 0;
    this.vertices = [];
    this.adjacentList = {};
  }

  addVertex(node) {
    if(this.isVertexAlreadyAdded(node)) {
      return 'Vertex is already added into the graph';
    }

    this.vertices.push(node);
    this.adjacentList[node] = [];
    this.numberOfVertexes++;

    return this;
  }

  addEdge(node1, node2) {
    // If a node do not exist, then we can't create a edge between them
    if (!this.isVertexAlreadyAdded(node1) || !this.isVertexAlreadyAdded(node2)) {
      return 'Both Vertexes needs to already exist to create a new edge';
    }

    
    if(this.isEdgeValid(node1, node2)) {
      return 'Edge between node1 and node2 already exists';
    }

    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);

    return this;
  }

  removeEdge(node1, node2) {
    if(this.isVertexAlreadyAdded(node1)) {
      const filteredArray = this.adjacentList[node1].filter(node => node !== node2);
      this.adjacentList[node1] = filteredArray;
    }

    if(this.isVertexAlreadyAdded(node2)) {
      const filteredArray = this.adjacentList[node2].filter(node => node !== node1);
      this.adjacentList[node2] = filteredArray;
    }
  }

  removeVertex(node) {
    this.adjacentList[node].forEach(connectedNode => {
      this.removeEdge(node, connectedNode);
    })

    this.adjacentList[node] = undefined;
  }

  isEdgeValid(leadNode, fellowNode) {
    return !! this.adjacentList[leadNode].find(i => i === fellowNode);
  }

  isVertexAlreadyAdded(node) {
    return Object.hasOwn(this.adjacentList, node);
  }

  depthFirstSearch(goal, v = this.vertices[0], discovered = []) {
      let adj = this.adjacentList;

      discovered[v] = true;

      for(let i = 0; i < adj[v].length; i++) {
        let w = adj[v][i];

        if(!discovered[w]) {
          this.depthFirstSearch(goal, w, discovered)
        }
      }

      return discovered[goal] || false;
  }

  breadthFirstSearch(goal, root = this.vertices[0]) {
    let adj = this.adjacentList;

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;
    
    while (queue.length) {
      let v = queue.shift();

      if(v === goal) {
        return true;
      }

      for (let i = 0; i < adj[v].length; i++) {
        if(!discovered[adj[v][i]]) {
          discovered[adj[v][i]] = true;
          queue.push(adj[v][i]);
        }
      }
    }

    return false;
  }

  showConnections() { 
    Object.entries(this.adjacentList).forEach( ([node, connections]) => {
        console.log(`${node} --> ${connections ? connections.join(' ') : connections}`)
    })
  }

}

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');
console.log(graph.breadthFirstSearch('5'));
// console.log(graph.depthFirstSearch('5'));
// graph.removeVertex('6');
// See if validation is working
// console.log(graph.addEdge('7', '5'));

// graph.showConnections();

//Answer:
// 0 --> 1, 2 
// 1 --> 3, 2, 0 
// 2 --> 4, 1, 0 
// 3 --> 1, 4 
// 4 --> 3, 2, 5 
// 5 --> 4, 6 
// 6 --> 5