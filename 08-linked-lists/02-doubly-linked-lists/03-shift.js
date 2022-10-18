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
}

let list = new DoublyLinkedList();

list.push('How');
list.push('are');
list.push('you');

console.log(list);
console.log(list.shift());
