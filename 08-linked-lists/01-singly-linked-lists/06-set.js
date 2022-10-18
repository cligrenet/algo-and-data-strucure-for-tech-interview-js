class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			// both the head and the tail point to the new node
			this.head = newNode;
			this.tail = this.head;
		} else {
			// take the tail, add onto the end
			this.tail.next = newNode;
			// move the tail one spot over
			this.tail = newNode;
		}
		this.length++;

		return this;
	}
	pop() {
		if (!this.head) return undefined;
		// both current and nt start at the head
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	// Remove a new node from the beginning of the linked list
	shift() {
		if (!this.head) return undefined;

		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}
	// Add a new node to the beginning of the linked list
	unshift(val) {
		let newNode = new Node(val);
		let currentHead = this.head;
		if (!currentHead) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = currentHead;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	// Change the value of a node based on its position in the linked list
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = value;
			return true;
		}
		return false;
	}
}

let list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you');

console.log(list.set(2, '!!'));
console.log(list.set(6, ':)'));
console.log(list.set(-1, 'lol'));
console.log(list);
