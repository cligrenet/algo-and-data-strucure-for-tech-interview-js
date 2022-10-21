// Breadth First Traversal
// visit neighbors at current depth first

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
	depthFirstIterative(start) {
		let stack = [start];
		let res = [];
		let visited = {};
		let currentVertex;

		visited[start] = true;
		while (stack.length) {
			// console.log(stack);
			currentVertex = stack.pop();
			res.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return res;
	}
	// Very similar to dfs iterative solution
	breadthFirst(start) {
		let queue = [start];
		let res = [];
		let visited = {};
		let currentVertex;

		visited[start] = true;
		while (queue.length) {
			currentVertex = queue.shift();
			res.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
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

// adjacencyList =
// {
//     A: [ 'B', 'C' ],
//     B: [ 'A', 'D' ],
//     C: [ 'A', 'E' ],
//     D: [ 'B', 'E', 'F' ],
//     E: [ 'C', 'D', 'F' ],
//     F: [ 'D', 'E' ]
//  }

// console.log(g.depthFirstRecursive('A')); //[ 'A', 'B', 'D', 'E', 'C', 'F' ] // start from the start of each array in the adjacency list
// console.log(g.depthFirstIterative('A')); //[ 'A', 'C', 'E', 'F', 'D', 'B' ] // start from the end of each array in the adjacency list
console.log(g.breadthFirst('A')); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]
