//Depth First Traversal 
// Recursive solution

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertexName) {
		if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
	}
	addEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
		if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		// if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].splice(vertex2, 1);
		// if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].splice(vertex1, 1);

		if (this.adjacencyList[vertex1])
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
		if (this.adjacencyList[vertex2])
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
	}
	removeVertex(vertexName) {
		if (this.adjacencyList[vertexName]) {
			while (this.adjacencyList[vertexName].length) {
				const adjacentVertex = this.adjacencyList[vertexName].pop();
				this.removeEdge(vertexName, adjacentVertex);
			}
			delete this.adjacencyList[vertexName];
		}
	}

	depthFirstRecursive(start) {
		let res = [];
		let visited = {};
		const adjacencyList = this.adjacencyList; // the context of 'this' later in the inner dfs function, need to preserve it here
		// console.log(adjacencyList);
		// {
		//     A: [ 'B', 'C' ],
		//     B: [ 'A', 'D' ],
		//     C: [ 'A', 'E' ],
		//     D: [ 'B', 'E', 'F' ],
		//     E: [ 'C', 'D', 'F' ],
		//     F: [ 'D', 'E' ]
		//  }

		// Helper function with recursive logic inside
		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			res.push(vertex);
			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		})(start);

		return res;
	}
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

/*
           A
        /     \
       B       C
       |       |
       D ----- E
        \     /
           F
 */

console.log(g.depthFirstRecursive('A')); //[ 'A', 'B', 'D', 'E', 'C', 'F' ]
