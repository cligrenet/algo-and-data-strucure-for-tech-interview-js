//// Create a queue with array:
// unshift - pop
// push - shift
// Will be the cascade of reindexing => cannot really improve performance

// let q = [];
// q.push('first');
// q.push('second');
// q.push('third');
// console.log(q);

// q.shift();
// console.log(q);

//----------------------------------

//// Create a queue with linked list:
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// Add to the end
	enqueue(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	// Remove from the start
	dequeue() {
		if (this.size === 0) return null;

		let firstNode = this.first;
		if (this.size === 1) {
			this.last = null;
		} else {
			this.first = firstNode.next;
		}
		this.size--;
		return firstNode.val;
	}
}

let q = new Queue();
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');
console.log(q);
q.dequeue();
console.log(q);
