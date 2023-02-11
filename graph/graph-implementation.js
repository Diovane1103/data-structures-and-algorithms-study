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
    this.adjacentList = {};
  }

  addVertex(node) {
    if(this.isVertexAlreadyAdded(node)) {
      return 'Vertex is already added into the graph';
    }

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

  isEdgeValid(leadNode, fellowNode) {
    return !! this.adjacentList[leadNode].find(i => i === fellowNode);
  }

  isVertexAlreadyAdded(node) {
    return Object.hasOwn(this.adjacentList, node);
  }

  showConnections() { 
    Object.entries(this.adjacentList).forEach( ([node, connections]) => {
        console.log(`${node} --> ${connections.join(' ')}`)
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
// See if validation is working
// console.log(graph.addEdge('7', '5'));

graph.showConnections();

//Answer:
// 0 --> 1, 2 
// 1 --> 3, 2, 0 
// 2 --> 4, 1, 0 
// 3 --> 1, 4 
// 4 --> 3, 2, 5 
// 5 --> 4, 6 
// 6 --> 5