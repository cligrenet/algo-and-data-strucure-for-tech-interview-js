/*
Adjacency List:
- 🤟 Can take up less space (in sparse graphs)
- 🤟 Faster to iterate over all edges
- Can be slower to loopup specific edge

Complexity:
  V = # of vertices
  E = # of edges
Add vertex       O(1)  
Add edge         O(1)             
Remove vertex    O(V+E)            
Remove edge      O(E)              
Query            O(V+E)            
Storage          O(V+E)            

                0 ---- 1
               /         \ 
              5           2
               \         /
                 4 ---- 3 

    [
 0      [1,5],
 1      [0,2],
 2      [1,3],
 3      [2,4],
 4      [3,5],
 5      [4,0]
    ]

                A ---- B
               /         \ 
              F           c
               \         /
                 E ---- D  

    {
        A: ["B", "F"],
        B: ["A", "C"],
        C: ["B", "D"],
        D: ["C", "E"],
        E: ["D", "F"],
        F: ["E", "A"]
    }             
*/

// undirected graph
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
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Paris');
// console.log(g.adjacencyList);
g.addEdge('Tokyo', 'Paris');
g.addEdge('Tokyo', 'San Francisco');
g.addEdge('San Francisco', 'Paris');
console.log(g.adjacencyList);
// g.removeEdge('SF', 'Par');
// console.log(g.adjacencyList);
// g.removeEdge('Tokyo', 'Paris');
// console.log(g.adjacencyList);
g.removeVertex('San Francisco');
console.log(g.adjacencyList);
g.removeVertex('New York');
console.log(g.adjacencyList);
