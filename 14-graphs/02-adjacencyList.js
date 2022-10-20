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
	addEdge() {}
	removeEdge() {}
	removeVertex() {}
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Hong Kong');
console.log(g.adjacencyList);
