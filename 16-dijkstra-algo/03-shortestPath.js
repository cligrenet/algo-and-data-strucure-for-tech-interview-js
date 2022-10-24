// Dijkstra's Algo (234 & 237)
// NOTE Hard!!!
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
	getShortestPath(startNode, finishNode) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		// Build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === startNode) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		// console.log(distances);
		/*
        distances = {
            A: 0,
            B: Infinity,
            C: Infinity,
            D: Infinity,
            E: Infinity,
            F: Infinity
        }
        */

		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finishNode) {
				// Done. Build up path to return at end
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// Find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					// console.log(nextNode);
					/*
                    { node: 'B', weight: 4 }
                    { node: 'C', weight: 2 }
                    { node: 'A', weight: 4 }
                    { node: 'E', weight: 3 }
                    { node: 'A', weight: 2 }
                    { node: 'D', weight: 2 }
                    { node: 'F', weight: 4 }
                    { node: 'C', weight: 2 }
                    { node: 'E', weight: 3 }
                    { node: 'F', weight: 1 }
                    { node: 'B', weight: 3 }
                    { node: 'D', weight: 3 }
                    { node: 'F', weight: 1 }
                    { node: 'C', weight: 4 }
                    { node: 'D', weight: 1 }
                    { node: 'E', weight: 1 }
                    */
					// Calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						// Update new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// Update previous (how we got to neighbor)
						previous[nextNeighbor] = smallest;
						// Enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.getShortestPath('A', 'E')); //[ 'A', 'C', 'D', 'F', 'E' ]
