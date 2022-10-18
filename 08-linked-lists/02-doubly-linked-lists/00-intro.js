//// Doubly linked list
// Almost identical to singly linked list, except every node has two poiters,
// one points to the next node and another one points to the previous node.

// more memory === more flexibility
// almost always a tradeoff

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

let first = new Node('How');
first.next = new Node('are');
first.next.prev = first;

console.log(first);

// Complexity:
// Insertion - 🤟 O(1)
// Removal - 🤟 O(1) // always constant
// Searching - O(n) // Technically can be optimised to O(n/2), but still simplifies to O(n) 🤟 Access data in a reverse manner
// Access - O(n)

// Tradeoff: the extra pointer taked up more memory
// Find nodes in half the time!
