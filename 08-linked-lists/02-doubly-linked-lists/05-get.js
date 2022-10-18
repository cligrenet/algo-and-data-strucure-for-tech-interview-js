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
	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	// Remove a node from the beginning of the doubly linked list
	shift() {
		if (!this.head) return undefined;
		// if(this.length === 0) return undefined; // the same as !this.head
		let removedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedNode.next;
			this.head.prev = null;
			removedNode.next = null;
		}
		this.length--;
		return removedNode;
	}
	// Add a node at the beginning of the doubly linked list
	unshift(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode; // Update the head to be the new node
		}
		this.length++;
		return this;
	}
	// Access a node in a doubly linked list by its position
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let count, current;
		if (index <= this.length / 2) {
			// Loop throught the list from the head
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			// Loop throught the list from the tail
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
}

let list = new DoublyLinkedList();

list.push('How');
list.push('are');
list.push('you');

// console.log(list);
console.log(list.get(2));
console.log(list.get(-1));
