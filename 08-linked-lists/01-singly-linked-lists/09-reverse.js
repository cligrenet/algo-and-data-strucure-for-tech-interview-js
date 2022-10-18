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
	// Add a node to the linked list at a specific position
	insert(index, value) {
		if (index < 0 || index > this.length) return false;

		if (index === this.length) {
			this.push(value);
			return true;
		}
		if (index === 0) {
			this.unshift(value);
			return true;
		}

		let newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let temp = prevNode.next; // Placeholding this node, otherwise it will disapear after the prev.next pointer move
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	// Remove a node from the linked list at a specific position
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prev = this.get(index - 1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}
	// Helper function to check whether reverse works
	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
	// Reverse the linked list in place
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null; // want to be sure the tail.next = null
		let next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

let list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you');
list.push('!!');

list.print();
console.log(list.reverse());
list.print();
