// Dijkstra's Algo optimised with binary heap priority queue

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null; // either the left child index or the right child index

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;

			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
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
